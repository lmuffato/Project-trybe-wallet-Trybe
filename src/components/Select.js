import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ name, display, handle, options }) => (
  <label className="form-label mb-3 text-capitalize" htmlFor={ name }>
    {display}
    <select
      id={ name }
      name={ name }
      className="form-select"
      onChange={ handle }
    >
      {options}
    </select>
  </label>
);

Select.propTypes = {
  name: PropTypes.string.isRequired,
  display: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
  options: PropTypes.string.isRequired,
};

export default Select;
