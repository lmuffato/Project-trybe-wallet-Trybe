import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputValueForms extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="value">
        Valor
        <input id="value" type="number" value={ value } onChange={ handleChange } />
      </label>
    );
  }
}

InputValueForms.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleChange: PropTypes.func.isRequired,
};
