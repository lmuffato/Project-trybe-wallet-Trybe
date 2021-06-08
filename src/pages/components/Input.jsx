import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { name, value, onChange, testId } = this.props;
    return (
      <label htmlFor={ name }>

        <input
          type={ name }
          placeholder={ name }
          value={ value }
          data-testid={ testId }
          onChange={ onChange }
        />

      </label>
    );
  }
}

export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
};
