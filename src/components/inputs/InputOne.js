import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputOne extends Component {
  render() {
    const { currencies, handleChangeInput, value, descricao, moeda } = this.props;
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
        <label htmlFor="descricao">
          Descrição:
          <input
            type="text"
            name="descricao"
            id="descricao"
            value={ descricao }
            onChange={ handleChangeInput }
          />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select onChange={ handleChangeInput } value={ moeda } name="moeda" id="moeda">
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
  descricao: PropTypes.string.isRequired,
  moeda: PropTypes.string.isRequired,
};
