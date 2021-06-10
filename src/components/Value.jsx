import React from 'react';
import PropTypes from 'prop-types';

class Value extends React.Component {
  render() {
    const { inputValue, handleValue } = this.props;
    return (
      <label htmlFor="value">
        Valor:
        <input
          type="text"
          id="value"
          value={ inputValue }
          onChange={ handleValue }
        />
      </label>
    );
  }
}

Value.propTypes = {
  inputValue: PropTypes.string,
}.isRequired;

export default Value;
