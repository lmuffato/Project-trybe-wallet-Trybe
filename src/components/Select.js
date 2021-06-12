import React from 'react';

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

export default Select;
