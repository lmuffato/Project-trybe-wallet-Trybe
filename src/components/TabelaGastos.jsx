import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense, edit } from '../actions';

class TabelaGastos extends React.Component {
  constructor() {
    super();
    this.renderButtons = this.renderButtons.bind(this);
  }

  renderButtons(id) {
    const { deletarDespesas, editarDespesas } = this.props;
    return (
      <div>
        <button
          type="button"
          data-testid="delete-btn"
          onClick={ () => deletarDespesas(id) }
        >
          Deletar
        </button>
        <button
          type="button"
          data-testid="edit-btn"
          onClick={ () => editarDespesas(id) }
        >
          Editar
        </button>
      </div>
    );
  }

  render() {
    const { expenses } = this.props;
    const descriptions = ['Descrição', 'Tag', 'Método de pagamento',
      'Valor', 'Moeda', 'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão',
      'Editar/Excluir'];
    return (
      <div>
        <table border="2" cellSpacing="0px" cellPadding="5px">
          <thead>
            <tr>
              { descriptions.map((value) => <th key={ value }>{ value }</th>) }
            </tr>
          </thead>
          <tbody>
            {
              expenses.map((expense) => {
                const { description, tag, method,
                  value, currency, exchangeRates, id } = expense;
                const { name, ask } = exchangeRates[currency];
                return (
                  <tr key={ id }>
                    <td>{ description }</td>
                    <td>{ tag }</td>
                    <td>{ method }</td>
                    <td>{ value }</td>
                    <td>{ name }</td>
                    <td>{ (Number(ask)).toFixed(2) }</td>
                    <td>{ (Number(ask) * Number(value)).toFixed(2) }</td>
                    <td>Real</td>
                    <td>{ this.renderButtons(id) }</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deletarDespesas: (id) => dispatch(deleteExpense(id)),
  editarDespesas: (id) => dispatch(edit(id)),
});

TabelaGastos.propTypes = {
  expenses: PropTypes.arrayOf({}),
  delExpense: PropTypes.func,
  edit: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(TabelaGastos);
