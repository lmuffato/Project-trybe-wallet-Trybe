import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ label, type, vid }) => (
  <label htmlFor={ vid }>
    {label}
    :
    <input type={ type } name={ vid } id={ vid } />
  </label>
);

export default Label;

Label.propTypes = {
  label: PropTypes.string.isRequired,
  vid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
