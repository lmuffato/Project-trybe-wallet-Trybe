import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteAction } from '../actions/wallet';

class ExpenseTable extends React.Component {
  constructor() {
    super();
    this.handleName = this.handleName.bind(this);
    this.handleConverted = this.handleConverted.bind(this);
    this.handleAsk = this.handleAsk.bind(this);
  }

  handleName(expense) {
    const { exchangeRates } = expense;
    const currentCurrency = exchangeRates[expense.currency];
    const currencyName = currentCurrency.name.split('/Real Brasileiro');
    return currencyName;
  }

  handleAsk(expense) {
    const { exchangeRates } = expense;
    const currentCurrency = exchangeRates[expense.currency];
    const currencyAsk = currentCurrency.ask;
    return parseFloat(currencyAsk).toFixed(2);
  }

  handleConverted(expense) {
    const { value, exchangeRates } = expense;
    const currentCurrency = exchangeRates[expense.currency];
    const converted = parseFloat(currentCurrency.ask) * value;
    return converted.toFixed(2);
  }

  render() {
    const { expenses, dispatchDelete } = this.props;
    return (
      <table className="table-container">
        <tr className="table-header">
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
        {expenses.map((expense) => (
          <tr key={ expense.id } className="table-body">
            <td>{ expense.description }</td>
            <td>{ expense.tag }</td>
            <td>{ expense.method }</td>
            <td>{ expense.value }</td>
            <td>{ this.handleName(expense) }</td>
            <td>{ this.handleAsk(expense) }</td>
            <td>{ this.handleConverted(expense) }</td>
            <td>Real</td>
            <td>
              <button
                className="table-edit-bttn"
                type="button"
              >
                Editar
              </button>
              <button
                data-testid="delete-btn"
                className="table-delete-bttn"
                type="button"
                onClick={ () => dispatchDelete(expense) }
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </table>
    );
  }
}

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchDelete: (payload) => dispatch(deleteAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
