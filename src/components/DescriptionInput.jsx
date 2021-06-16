import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DescriptionInput extends Component {
  render() {
    const { handleChange, description } = this.props;
    return (
      <label htmlFor="desc">
        Descrição
        <input
          aria-label="descrição"
          type="text"
          name="description"
          onChange={ handleChange }
          value={ description }
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
