import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DescriptionInput extends Component {
  render() {
    const { handleChange, description } = this.props;

    return (
      <label htmlFor="description" className="wallet-form-input-label">
        Descrição
        <input
          id="description"
          value={ description }
          onChange={ handleChange }
          data-testid="description-input"
          className="wallet-form-input"
        />
      </label>
    );
  }
}

DescriptionInput.propTypes = {
  handleChange: PropTypes.func,
  description: PropTypes.string,
}.isRequired;

export default DescriptionInput;
