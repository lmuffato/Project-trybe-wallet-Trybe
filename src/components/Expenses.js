import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Expense from './Expense';

export default class Expenses extends Component {
  render() {
    const { expenses } = this.props;
    if (!expenses.length) {
      return <tbody><tr><td>Nenhuma despesa cadastrada</td></tr></tbody>;
    }
    return (
      <tbody>
        {!expenses.length ? null : (
          expenses.map((expense) => {
            const { exchangeRates, currency, description, tag, method, value } = expense;
            const currencyName = exchangeRates[currency].name.split('/');
            return (
              <Expense
                key={ expense.id }
                expense={ {
                  description,
                  tag,
                  method,
                  value,
                  currencyName,
                  exchange: exchangeRates[currency].ask,
                  convertedValue: exchangeRates[currency].ask * value,
                } }
              />
            );
          }))}
      </tbody>
    );
  }
}

Expenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
