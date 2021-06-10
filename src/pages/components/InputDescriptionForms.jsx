import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputDescriptionForms extends Component {
  render() {
    const { description, handleChange } = this.props;
    return (
      <label htmlFor="description">
        Descrição:
        <input
          id="description"
          type="text"
          value={ description }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputDescriptionForms.propTypes = {
  description: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
