import React from 'react';
import PropTypes from 'prop-types';

function InputExpense({ setValue, value, ...props }) {
  // console.log(value);
  return (
    <div className="wallet-form__group">
      <label
        htmlFor="value"
      >
        Valor
        <input
          type="number"
          id="value"
          name="value"
          onChange={ setValue }
          value={ value }
          { ...props }
        />
      </label>

    </div>
  );
}

export default InputExpense;

InputExpense.propTypes = {
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
