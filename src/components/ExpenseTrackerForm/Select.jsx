import React from 'react';
import PropTypes from 'prop-types';

function Select({ name, onChange, label, options }) {
  return (
    <label htmlFor={ name }>
      { label }
      <select name={ name } id={ name } onChange={ onChange }>
        {options.map((option, index) => {
          if (index === 0) {
            return (<option defaultValue key={ index }>Selecione</option>);
          }
          return (
            <option value={ option } key={ index }>
              { option }
            </option>);
        })}
      </select>
    </label>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;
