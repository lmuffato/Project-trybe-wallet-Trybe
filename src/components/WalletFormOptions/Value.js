import React from 'react';
import { func } from 'prop-types';

export default function Value(props) {
  const { value, handleInput } = props;
  return (
    <label className="form-label" htmlFor="expense-value">
      Valor:
      <input
        className="value"
        id="expense-value"
        data-testid="value-input"
        type="number"
        step="any"
        min="0"
        name="value"
        value={ value }
        onChange={ handleInput }
        placeholder="0,00"
        autoComplete="off"
      />
    </label>
  );
}

Value.propTypes = {
  setValue: func,
}.isRequired;
