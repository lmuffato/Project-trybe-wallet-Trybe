import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function SelectCoin({ setValue, valueState, ...props }) {
  const currencies = useSelector(({ wallet }) => wallet.currencies);
  return (
    <div className="wallet-form__group">
      <label
        htmlFor="coin"
      >
        Moeda
        <select
          id="coin"
          name="coin"
          onChange={ setValue }
          value={ valueState }
          { ...props }
        >
          {currencies && currencies.map((currency, index) => (
            <option key={ index } value={ currency.code }>{currency.code}</option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default SelectCoin;

SelectCoin.propTypes = {
  setValue: PropTypes.func.isRequired,
  valueState: PropTypes.string,
};

SelectCoin.defaultProps = {
  valueState: '',
};
