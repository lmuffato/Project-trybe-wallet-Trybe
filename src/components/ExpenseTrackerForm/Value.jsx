import React from 'react';
import PropTypes from 'prop-types';

function Value({ name, value, handleChange }) {
  return (
    <label htmlFor="valor">
      Valor
      <input
        type="number"
        name={ name }
        id="valor"
        value={ value }
        onChange={ handleChange }
      />
    </label>
  );
}

Value.propTypes = {
  value: PropTypes.shape(PropTypes.number || PropTypes.string),
  name: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default Value;
