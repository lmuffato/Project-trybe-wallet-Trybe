import React from 'react';
import { func, string } from 'prop-types';

function SelectInput({ children, label, name, value, onChange }) {
  return (
    <label htmlFor={ name }>
      {`${label}:`}
      <select
        name={ name }
        id={ name }
        value={ value }
        data-testid={ `${name}-input` }
        onChange={ onChange }
      >
        {children}
      </select>
    </label>
  );
}

SelectInput.propTypes = {
  label: string,
  name: string,
  value: string,
  onChange: func,
}.isRequired;

export default SelectInput;
