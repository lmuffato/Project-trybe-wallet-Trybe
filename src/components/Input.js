import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { handleChange, type, name, refValue } = this.props;
    return (
      <input
        ref={ refValue }
        type={ type }
        data-testid={ `${name}-input` }
        id={ `${name}-input` }
        className="input"
        placeholder=" "
        name={ name }
        onChange={ handleChange }
        required
      />
    );
  }
}

Input.propTypes = {
  handleChange: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
}.isRequired;
