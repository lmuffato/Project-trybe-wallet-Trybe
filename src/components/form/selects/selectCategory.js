import React from 'react';
import PropTypes from 'prop-types';
import { optionsTag } from './optionsSelect';

function SelectCategoy({ setValue, valueState, ...props }) {
  return (
    <div className="wallet-form__group">
      <label
        htmlFor="category"
      >
        Tag
        <select
          id="category"
          name="category"
          onChange={ setValue }
          value={ valueState }
          { ...props }
        >
          {optionsTag.map(({ value, text }, index) => (
            <option value={ value } key={ index }>{text}</option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default SelectCategoy;

SelectCategoy.propTypes = {
  setValue: PropTypes.func.isRequired,
  valueState: PropTypes.string,
};

SelectCategoy.defaultProps = {
  valueState: '',
};
