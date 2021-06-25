import React from 'react';
import PropTypes from 'prop-types';

class InputDescription extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <form>
        <label htmlFor="description">
          Descrição
          <input
            value={ value }
            onChange={ onChange }
            className="input"
            type="text"
            name="description"
            id="description"
          />
        </label>
      </form>
    );
  }
}

InputDescription.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default InputDescription;
