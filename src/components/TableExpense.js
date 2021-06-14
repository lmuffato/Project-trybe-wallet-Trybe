import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpanse, addTotalExpense } from '../actions';

class TableExpense extends React.Component {
  getCurrencyName(expense) {
    const Currency = Object
      .values(expense.exchangeRates)
      .find((exchange) => exchange.code === expense.currency);
    return Currency.name.replace('/Real Brasileiro', '');
  }

  getCurrencyValue(expense) {
    const Currency = Object
      .values(expense.exchangeRates)
      .find((exchange) => exchange.code === expense.currency);
    return parseFloat(Currency.ask).toFixed(2);
  }

  getExpenseValue(expense) {
    const Currency = Object
      .values(expense.exchangeRates)
      .find((exchange) => exchange.code === expense.currency);
    return parseFloat(Number(expense.value) * Number(Currency.ask)).toFixed(2);
  }

  handleClick(event) {
    const { userExpenses, excludeToExpenses } = this.props;
    const deleteExpense = event.target;

    delete userExpenses[deleteExpense.id];

    excludeToExpenses(userExpenses);
  }

  summValue(expense) {
    const { totalValue, summTotal } = this.props;
    const Currency = Object
      .values(expense.exchangeRates)
      .find((exchange) => exchange.code === expense.currency);
    summTotal(totalValue - (Number(expense.value) * Number(Currency.ask)));
  }

  render() {
    const { userExpenses, totalValue } = this.props;
    return (
      <table>
        <thead>
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
        </thead>
        <tbody>
          { userExpenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              <td>{ expense.value }</td>
              <td>{ this.getCurrencyName(expense) }</td>
              <td>{ this.getCurrencyValue(expense) }</td>
              <td>{ this.getExpenseValue(expense) }</td>
              <td>Real</td>
              <td>
                <button type="button">Editar</button>
                <button
                  type="button"
                  data-testid="delete-btn"
                  id={ expense.id }
                  onClick={ (event) => {
                    event.preventDefault();
                    this.summValue(expense);
                    this.handleClick(event);
                    console.log(totalValue);
                  } }
                >
                  x
                </button>
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  userExpenses: state.wallet.expenses,
  totalValue: state.wallet.totalValue,
});

const mapDispatchToProps = (dispatch) => ({
  excludeToExpenses: (componentState) => dispatch(deleteExpanse(componentState)),
  summTotal: (totalValue) => dispatch(addTotalExpense(totalValue)),
});

TableExpense.propTypes = {
  userExpenses: PropTypes.array.isRequired,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(TableExpense);
