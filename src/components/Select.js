import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ label, options, vid }) => (
  <label htmlFor={ vid }>
    {label}
    :
    <select id={ vid } name={ label }>
      {options.map((option) => (
        <option value={ option } key={ option }>{option}</option>
      ))}
    </select>
  </label>
);

export default Select;

Select.propTypes = {
  label: PropTypes.string.isRequired,
  vid: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
