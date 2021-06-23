import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteElementTable } from '../actions';

class Table extends Component {
  constructor(props) {
    super(props);

    this.delete = this.delete.bind(this);
  }

  delete(event) {
    const { expenses, deleteRow } = this.props;
    const element = event.target.parentElement.parentElement.id;
    const obj = expenses.find((item) => item.id === Number(element));
    deleteRow(obj);
  }

  render() {
    const { expenses } = this.props;
    return (
      <div>
        {expenses.length ? (
          <table>
            <thead>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </thead>
            <tbody>
              {expenses.map((expense) => {
                const { currency,
                  exchangeRates, description, tag, method, value } = expense;
                const valueCambi = Number(exchangeRates[currency].ask);
                const valueConvert = expense.value * exchangeRates[currency].ask;
                const curr = expense.exchangeRates[currency]
                  .name.replace('/Real Brasileiro', '');
                return (
                  <tr key={ expense.id } id={ expense.id }>
                    <td>{description}</td>
                    <td>{tag}</td>
                    <td>{method}</td>
                    <td>{value}</td>
                    <td>{curr}</td>
                    <td>{valueCambi.toFixed(2)}</td>
                    <td>{valueConvert.toFixed(2)}</td>
                    <td>Real</td>
                    <td>
                      Editar/Exluir
                      <input
                        type="button"
                        data-testid="delete-btn"
                        onClick={ this.delete }
                      />
                    </td>
                  </tr>);
              })}
            </tbody>
          </table>) : 'sem despesas'}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteRow: (state) => dispatch(deleteElementTable(state)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
  deleteRow: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
