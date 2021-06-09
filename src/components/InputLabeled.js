import React from 'react';
import { string, func } from 'prop-types';

function InputLabeled({ label, type, value, onChange }) {
  return (
    <label htmlFor={ label }>
      {label}
      <input
        id={ label }
        type={ type }
        name={ label }
        value={ value }
        onChange={ onChange }
      />
    </label>
  );
}

InputLabeled.propTypes = {
  label: string,
  type: string,
  name: string,
  value: string,
  onChange: func,
}.isRequired;

export default InputLabeled;
