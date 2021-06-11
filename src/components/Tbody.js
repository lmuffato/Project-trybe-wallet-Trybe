import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions/wallet';

class Tbody extends Component {
  constructor() {
    super();

    this.getInfoExpenses = this.getInfoExpenses.bind(this);
  }

  getInfoExpenses(expense) {
    const actualCurrency = expense.currency;
    const actualCurrencyValue = Number(expense.value);
    const arrayActualCurrency = Object.values(expense.exchangeRates);
    const objectActualCurrency = arrayActualCurrency
      .find((element) => element.code === actualCurrency);
    const arrayNameCurrency = objectActualCurrency.name.split('/');
    const exchange = Number(objectActualCurrency.ask);
    const convertedValue = actualCurrencyValue * exchange;
    return { arrayNameCurrency, exchange, convertedValue };
  }

  render() {
    const { expenses, deleteExp } = this.props;
    return (
      <>
        {expenses.map((element) => (
          <tr key={ element.id }>
            <td>{ element.description }</td>
            <td>{ element.tag }</td>
            <td>{ element.method }</td>
            <td>{ element.value }</td>
            <td>{ this.getInfoExpenses(element).arrayNameCurrency[0] }</td>
            <td>{ this.getInfoExpenses(element).exchange.toFixed(2) }</td>
            <td>{ this.getInfoExpenses(element).convertedValue.toFixed(2) }</td>
            <td>Real</td>
            <td>
              <button type="button">Editar</button>
              <button
                type="button"
                data-testid="delete-btn"
                onClick={ () => deleteExp(element) }
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExp: (payload) => dispatch(deleteExpense(payload)),
});

Tbody.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExp: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tbody);
