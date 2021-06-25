import React from 'react';
import PropTypes from 'prop-types';

function Input({ type, id, name, value, onChange, description }) {
  return (
    <label htmlFor={ id }>
      {description}
      <input
        type={ type }
        name={ name }
        id={ id }
        value={ value }
        onChange={ onChange }
      />
    </label>
  );
}
Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};

export default Input;
