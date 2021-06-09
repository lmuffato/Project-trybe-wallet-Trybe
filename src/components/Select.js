import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ label, options, vid }) => (
  <select name={ label } id={ vid }>
    {options.map((option) => (
      <option value={ option } key={ option }>{option}</option>
    ))}
  </select>
);

export default Select;

Select.propTypes = {
  label: PropTypes.string.isRequired,
  vid: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
