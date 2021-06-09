import React from 'react';
import PropTypes from 'prop-types';

function InputDescription({ setValue, value, ...props }) {
  return (
    <div className="wallet-form__group">
      <label
        htmlFor="description"
      >
        Descrição
        <input
          type="text"
          id="description"
          name="description"
          onChange={ setValue }
          value={ value }
          { ...props }
        />
      </label>

    </div>
  );
}

export default InputDescription;

InputDescription.propTypes = {
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
