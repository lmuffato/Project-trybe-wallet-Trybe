import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { options, title, value, id, htmlFor, label, handleChange } = this.props;
    return (
      <label htmlFor={ htmlFor }>
        {label}
        <select
          className="form-select"
          name={ htmlFor }
          id={ id }
          onChange={ handleChange }
          defaultValue={ value }
          required
        >
          <option disabled hidden>Selecione...</option>
          {options.map((option) => (
            <option
              key={ option[title] || option }
              value={ option[title] || option }
            >
              {option[title] || option}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  options: PropTypes.shape({}),
}.isRequired;
