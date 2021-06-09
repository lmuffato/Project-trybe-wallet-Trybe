import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, shape, func } from 'prop-types';

import { deleteDespesa } from '../actions';

class Table extends Component {
  constructor() {
    super();
    this.renderTableExpenses = this.renderTableExpenses.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  handleClickDelete(id) {
    const { filterDespesa, expenses } = this.props;
    const filter = expenses.filter((despesa) => despesa.id !== id);
    const condicional = filter || [];
    filterDespesa(condicional);
  }

  renderTableExpenses() {
    const { expenses } = this.props;
    if (expenses.length) {
      const element = expenses.map((despesa) => {
        const { description, currency, method, tag, value, exchangeRates, id } = despesa;
        const valorConvertido = exchangeRates[currency].ask * Number(value);
        const priceAtual = Number(exchangeRates[currency].ask);
        return (
          <tr key={ id }>
            <td className="currency">{currency}</td>
            <td>{description}</td>
            <td>{tag}</td>
            <td>{method}</td>
            <td>{value}</td>
            <td>{exchangeRates[currency].name.split('/')[0]}</td>
            <td>{priceAtual.toFixed(2)}</td>
            <td>{valorConvertido.toFixed(2)}</td>
            <td>Real</td>
            <td>
              <button
                onClick={ () => this.handleClickDelete(id) }
                data-testid="delete-btn"
                type="button"
              >
                Deletar
              </button>
            </td>
          </tr>
        );
      });
      return element;
    }
  }

  render() {
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        {this.renderTableExpenses()}
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  filterDespesa: (payload) => dispatch(deleteDespesa(payload)),
});

Table.propTypes = {
  expenses: arrayOf(shape({})).isRequired,
  filterDespesa: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
