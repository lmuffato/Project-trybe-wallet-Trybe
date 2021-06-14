import React from 'react';
import { func, objectOf, object } from 'prop-types';

function Currency(props) {
  const { currencies, selectedCur, handleInput } = props;
  return (
    <label className="form-label" htmlFor="expense-currency">
      Moeda:
      <select
        id="expense-currency"
        data-testid="currency-input"
        name="currency"
        value={ selectedCur }
        onChange={ handleInput }
      >
        { currencies.map((currency) => (
          <option key={ currency } value={ currency }>{ currency }</option>)) }
      </select>
    </label>
  );
}

Currency.propTypes = {
  setCurrencies: func,
  currencies: objectOf(object),
}.isRequired;

export default Currency;
