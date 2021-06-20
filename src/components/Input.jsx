import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, htmlFor, name, textLabel, id, handleChange, value } = this.props;
    return (
      <label htmlFor={ htmlFor }>
        { textLabel }
        <input
          value={ value }
          type={ type }
          name={ name }
          onChange={ (event) => handleChange(event.target.value, event.target.name) }
          id={ id }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  textLabel: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
