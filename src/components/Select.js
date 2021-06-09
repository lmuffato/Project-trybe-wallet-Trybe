import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ htmlfor, options, label }) => (
  <label htmlFor={ htmlfor }>
    {label}
    :
    <select name={ htmlfor } id={ htmlfor }>
      {options.map(({ name }) => (
        <option key={ name } value={ name }>{name}</option>
      ))}
    </select>
  </label>
);

Select.propTypes = {
  htmlfor: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
};

export default Select;
