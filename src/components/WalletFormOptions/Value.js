import React from 'react';
import { func } from 'prop-types';

export default function Value(props) {
  const { value, handleInput } = props;
  return (
    <label htmlFor="expense-value">
      Valor:
      <input
        id="expense-value"
        type="text"
        name="value"
        value={ value }
        onChange={ handleInput }
        placeholder="0,00"
      />
    </label>
  );
}

Value.propTypes = {
  setValue: func,
}.isRequired;
