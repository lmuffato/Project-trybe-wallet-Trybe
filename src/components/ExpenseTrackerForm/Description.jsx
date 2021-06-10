import React from 'react';
import PropTypes from 'prop-types';

function Description({ name, value, handleChange }) {
  return (
    <label htmlFor="description">
      Descrição
      <input
        type="text"
        name={ name }
        id="description"
        value={ value }
        onChange={ handleChange }
      />
    </label>
  );
}

Description.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Description;
