import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ValueInput extends Component {
  render() {
    const { handleChange, value } = this.props;

    return (
      <label htmlFor="value" className="wallet-form-input-label">
        Valor
        <input
          id="value"
          value={ value }
          onChange={ handleChange }
          data-testid="value-input"
          className="wallet-form-input"
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
