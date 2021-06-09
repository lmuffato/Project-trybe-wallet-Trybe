import React from 'react';
import PropTypes from 'prop-types';

function InputExpense({ setValue, value, ...props }) {
  return (
    <div className="wallet-form__group">
      <label
        htmlFor="expense"
      >
        Valor
        <input
          type="number"
          id="expense"
          name="expense"
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
