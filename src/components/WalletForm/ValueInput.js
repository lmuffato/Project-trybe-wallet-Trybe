import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ValueInput extends Component {
  render() {
    const { handleChange, value } = this.props;

    return (
      <label htmlFor="value">
        Valor
        <input
          id="value"
          name="value"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ValueInput.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default ValueInput;
