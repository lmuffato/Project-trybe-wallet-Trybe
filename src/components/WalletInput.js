import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class WalletInput extends Component {
  render() {
    const { label, type, id, htmlFor, handleChange } = this.props;
    return (
      <label htmlFor={ htmlFor }>
        {label}
        <input
          className="form-control"
          type={ type }
          id={ id }
          name={ htmlFor }
          onChange={ handleChange }
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
