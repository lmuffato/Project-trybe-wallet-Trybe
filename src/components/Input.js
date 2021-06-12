import React from 'react';

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

export default Input;
