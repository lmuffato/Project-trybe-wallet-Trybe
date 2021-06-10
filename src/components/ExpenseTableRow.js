import React from 'react';
import PropTypes from 'prop-types';

class ExpenseTableRow extends React.Component {
  currencyInfos(currency, exchangeRates) {
    const currenciesArray = Object.values(exchangeRates)
      .find((foundCurrency) => foundCurrency.code === currency);
    return ({
      nameCurrency: currenciesArray.name,
      conversionCurrency: currenciesArray.ask,
    });
  }

  render() {
    const { expense } = this.props;
    const { description, tag, method, value, currency, exchangeRates } = expense;
    const { nameCurrency, conversionCurrency,
    } = this.currencyInfos(currency, exchangeRates);
    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>{nameCurrency}</td>
        <td>{parseFloat(conversionCurrency).toFixed(2)}</td>
        <td>{(value * conversionCurrency).toFixed(2)}</td>
        <td>Real</td>
        <td>edit buttons</td>
      </tr>
    );
  }
}

ExpenseTableRow.propTypes = {
  expense: PropTypes.objectOf({}).isRequired,
};

export default ExpenseTableRow;
