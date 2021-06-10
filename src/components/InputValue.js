import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputValue extends Component {
  render() {
    const { propValue, onChange } = this.props;
    return (
      <label htmlFor="valor">
        Valor
        <input
          type="text"
          id="valor"
          name="value"
          value={ propValue }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputValue.propTypes = {
  propValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputValue;
