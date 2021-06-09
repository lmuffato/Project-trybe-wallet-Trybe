import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ htmlfor, type, label }) => (
  <label htmlFor={ htmlfor }>
    {label}
    :
    <input type={ type } name={ htmlfor } />
  </label>
);

Label.propTypes = {
  htmlfor: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Label;
