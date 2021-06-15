import React from 'react';
import PropTypes from 'prop-types';

class ValueInput extends React.Component {
  render() {
    const { localValue, onChange } = this.props;
    return (
      <label htmlFor="value_input">
        Valor:
        <input
          id="value_input"
          type="text"
          name="value"
          value={ localValue }
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default ValueInput;

ValueInput.propTypes = {
  onChange: PropTypes.func,
  localValue: PropTypes.number,
}.isRequired;
