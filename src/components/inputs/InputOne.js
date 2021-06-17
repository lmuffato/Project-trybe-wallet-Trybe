import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputOne extends Component {
  render() {
    const { currencies, handleChangeInput, value, description, currency } = this.props;
    return (
      <div>
        <label htmlFor="value">
          Valor:
          <input
            type="text"
            name="value"
            id="value"
            value={ value }
            onChange={ handleChangeInput }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            name="description"
            id="description"
            value={ description }
            onChange={ handleChangeInput }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select onChange={ handleChangeInput } value={ currency } name="currency" id="currency">
            { currencies
              .map((currency) => (
                <option
                  value={ currency }
                  key={ currency }
                >
                  {currency}
                </option>)) }
          </select>
        </label>
      </div>
    );
  }
}

InputOne.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChangeInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
