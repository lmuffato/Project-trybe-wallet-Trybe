import React from 'react';
import PropTypes from 'prop-types';
import { optionsPayment } from './optionsSelect';

function SelectPayment({ setValue, valueState, ...props }) {
  return (
    <div className="wallet-form__group">
      <label
        htmlFor="payment"
      >
        Método de pagamento
        <select
          id="payment"
          name="payment"
          onChange={ setValue }
          value={ valueState }
          { ...props }
        >
          {optionsPayment.map(({ value, text }, index) => (
            <option value={ value } key={ index }>{text}</option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default SelectPayment;

SelectPayment.propTypes = {
  setValue: PropTypes.func.isRequired,
  valueState: PropTypes.string,
};

SelectPayment.defaultProps = {
  valueState: '',
};
