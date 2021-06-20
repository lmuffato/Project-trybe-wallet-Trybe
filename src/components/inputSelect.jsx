import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputSelect extends Component {
  options() {
    const { arrayOption } = this.props;
    if (arrayOption) {
      return arrayOption.map((index) => (
        <option key={ index }>{ index }</option>
      ));
    }
  }

  render() {
    const array = this.options();
    const { htmlFor, textLabel, name, id, handleChange } = this.props;
    return (
      <label htmlFor={ htmlFor }>
        { textLabel }
        <select
          id={ id }
          name={ name }
          onChange={ (event) => handleChange(event.target.value, event.target.name) }
        >
          { array || ''}
        </select>
      </label>
    );
  }
}

InputSelect.propTypes = {
  textLabel: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  arrayOption: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
