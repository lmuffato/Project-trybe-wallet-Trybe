import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { children, name, value, onChange, type } = this.props;
    return (
      <label htmlFor={ name }>
        {children}
        <input
          aria-label={ children }
          name={ name }
          value={ value }
          onChange={ onChange }
          type={ type }
          required
        />
      </label>
    );
  }
}

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
