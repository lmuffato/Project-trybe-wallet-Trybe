import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputDescription extends Component {
  render() {
    const { propValue, onChange } = this.props;
    return (
      <label htmlFor="descricao">
        Descrição
        <input
          type="text"
          id="descricao"
          name="description"
          value={ propValue }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputDescription.propTypes = {
  propValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputDescription;
