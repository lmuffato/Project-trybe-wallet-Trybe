import React from 'react';
import PropTypes from 'prop-types';

class DescriptionInput extends React.Component {
  render() {
    const { localValue, onChange } = this.props;
    return (
      <label htmlFor="value_description">
        Descrição:
        <input
          id="value_description"
          type="text"
          name="description"
          value={ localValue }
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default DescriptionInput;

DescriptionInput.propTypes = {
  onChange: PropTypes.func,
  localValue: PropTypes.string,
}.isRequired;
