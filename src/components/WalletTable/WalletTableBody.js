import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletTableBody extends Component {
  constructor() {
    super();
    this.getCurrencyNameFromExpense = this.getCurrencyNameFromExpense.bind(this);
    this.getExchangeRateFromExpense = this.getExchangeRateFromExpense.bind(this);
    this.getConvertedValueFromExpense = this.getConvertedValueFromExpense.bind(this);
  }

  getCurrencyNameFromExpense(expense) {
    const expenseCurrency = expense.exchangeRates[expense.currency];
    return expenseCurrency.name.split('/')[0];
  }

  getExchangeRateFromExpense(expense) {
    const expenseCurrency = expense.exchangeRates[expense.currency];
    return parseFloat(expenseCurrency.ask).toFixed(2);
  }

  getConvertedValueFromExpense(expense) {
    const expenseCurrency = expense.exchangeRates[expense.currency];
    const convertedValue = expense.value * expenseCurrency.ask;
    return parseFloat(convertedValue).toFixed(2);
  }

  render() {
    const { expenses } = this.props;

    return (
      <tbody>
        {expenses.map((expense) => (
          <tr key={ expense.id }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{expense.value}</td>
            <td>{this.getCurrencyNameFromExpense(expense)}</td>
            <td>{this.getExchangeRateFromExpense(expense)}</td>
            <td>{this.getConvertedValueFromExpense(expense)}</td>
            <td>Real</td>
            <td>Editar/Excluir</td>
          </tr>
        ))}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

WalletTableBody.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.number,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    exchangeRates: PropTypes.objectOf(PropTypes.string),
  })),
}.isRequired;

export default connect(mapStateToProps, null)(WalletTableBody);
