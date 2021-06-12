import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, display, handleChange }) => (
  <label className="form-label mb-3 text-capitalize" htmlFor={ name }>
    {display}
    <input
      id={ name }
      name={ name }
      className="form-control"
      type="text"
      onChange={ handleChange }
    />
  </label>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  display: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
