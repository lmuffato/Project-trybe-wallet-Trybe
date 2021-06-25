import React from 'react';
import PropTypes from 'prop-types';

class InputValue extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            value={ value }
            onChange={ onChange }
            className="input"
            type="text"
            name="value"
            id="value"
          />
        </label>
      </form>
    );
  }
}

InputValue.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default InputValue;
