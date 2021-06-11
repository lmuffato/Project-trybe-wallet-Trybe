import React from 'react';
import PropTypes from 'prop-types';

class TextInputs extends React.Component {
  render() {
    const { handleChange, value, description } = this.props;
    return (
      <>
        <label htmlFor="value-input">
          Valor
          <input
            type="text"
            id="value-input"
            onChange={ handleChange }
            name="value"
            value={ value }
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <input
            type="text"
            id="description-input"
            onChange={ handleChange }
            name="description"
            value={ description }
          />
        </label>
      </>
    );
  }
}

TextInputs.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
  description: PropTypes.string,
}.isRequired;

export default TextInputs;
