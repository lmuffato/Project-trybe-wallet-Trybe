import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class WalletInput extends Component {
  render() {
    const { label, type, id, htmlFor, handleChange, value, dataTestId } = this.props;
    return (
      <label htmlFor={ htmlFor }>
        {label}
        <input
          className="form-control"
          data-testid={ dataTestId }
          type={ type }
          id={ id }
          min={ type === 'number' ? 0 : '' }
          name={ htmlFor }
          onChange={ handleChange }
          value={ value }
          required
        />
      </label>
    );
  }
}

WalletInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  htmlFor: PropTypes.string,
}.isRequired;
