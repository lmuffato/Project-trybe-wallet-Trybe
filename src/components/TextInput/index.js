import React from 'react';
import { func, string } from 'prop-types';

function TextInput({ label, onChange, value, name }) {
  return (
    <label htmlFor={ name }>
      {`${label}:`}
      <input
        type="text"
        id={ name }
        name={ name }
        onChange={ onChange }
        value={ value }
        data-testid={ `${name}-input` }
      />
    </label>
  );
}

TextInput.propTypes = {
  label: string,
  value: string,
  name: string,
  onChange: func,
}.isRequired;

export default TextInput;
