import React from 'react';
import PropTypes from 'prop-types';

class Expense extends React.Component {
  render() {
    const {
      description,
      value,
      tag,
      method,
      currency,
      exchangeRates,
    } = this.props;
    const currencyName = exchangeRates[currency].name.split('/')[0];
    const exchangeRateUsed = exchangeRates[currency].ask;
    const exchangeRateUsedFloat = parseFloat(exchangeRateUsed).toFixed(2);
    const valueInBRL = parseFloat(exchangeRateUsed * value).toFixed(2);
    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>{currencyName}</td>
        <td>{exchangeRateUsedFloat}</td>
        <td>{valueInBRL}</td>
        <td>Real</td>
      </tr>

    );
  }
}

export default (Expense);

Expense.propTypes = {
  description: PropTypes.string,
  value: PropTypes.number,
  tag: PropTypes.string,
  method: PropTypes.string,
  currency: PropTypes.string,
  exchangeRates: PropTypes.object,
}.isRequired;
