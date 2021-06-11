import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Value extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="value">
        Valor:
        <input
          name="value"
          value={ value }
          id="value"
          type="number"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Value.propTypes = {
  value: PropTypes.number,
  handleChange: PropTypes.func,
}.isRequired;
