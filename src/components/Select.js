import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { options, value, title, id, htmlFor, label, name } = this.props;
    return (
      <label htmlFor={ htmlFor }>
        {label}
        <select className="form-select" defaultValue={ value } name={ name } id={ id }>
          {options.map((option) => (
            <option key={ option[title] || option } value={ option[title] || option }>
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
