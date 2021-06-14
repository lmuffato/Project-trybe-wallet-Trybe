import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DescriptionInput extends Component {
  render() {
    const { handleChange, description } = this.props;

    return (
      <label htmlFor="description">
        Descrição
        <input
          id="description"
          name="description"
          value={ description }
          onChange={ handleChange }
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
