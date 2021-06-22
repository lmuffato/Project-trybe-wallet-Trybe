import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Expense from './Expense';

export default class Expenses extends Component {
  render() {
    const { expenses } = this.props;
    if (!expenses.length) {
      return (
        <tbody>
          <tr>
            <td>Nenhuma despesa cadastrada</td>
          </tr>
        </tbody>
      );
    }
    return (
      <tbody>
        {expenses.map((expense) => {
          const {
            exchangeRates,
            currency,
            value,
            id,
          } = expense;
          // const exchangeName = exchangeRates[currency].name;
          const currencyName = exchangeRates[currency].name;
          // const currencyName = exchangeName.substring(0, exchangeName.lastIndexOf('/'));

          return (
            <Expense
              key={ id }
              id={ id }
              expense={ {
                ...expense,
                currencyName,
                exchange: exchangeRates[currency].ask,
                convertedValue: exchangeRates[currency].ask * value,
              } }
            />
          );
        })}
      </tbody>
    );
  }
}

Expenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
