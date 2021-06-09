import React from 'react';
import PropTypes from 'prop-types';

function SelectCoin({ setValue, valueState, ...props }) {
  return (
    <div className="wallet-form__group">
      <label
        htmlFor="coin"
      >
        Moeda
        <select
          id="coin"
          name="coin"
          onChange={ setValue }
          value={ valueState }
          { ...props }
        >
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </label>
    </div>
  );
}

export default SelectCoin;

SelectCoin.propTypes = {
  setValue: PropTypes.func.isRequired,
  valueState: PropTypes.string,
};

SelectCoin.defaultProps = {
  valueState: '',
};
