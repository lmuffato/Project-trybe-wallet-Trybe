/* eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { onChange, currency, coins, method, tag } = this.props;
    return (
      <div>
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            name="currency"
            value={ currency }
            onChange={ onChange }
            aria-label="Moeda"
          >
            {coins.map((coinType) => (coinType !== 'USDT'
              ? <option key={ coinType } value={ coinType }>{coinType}</option> : ''))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select
            id="method"
            name="method"
            value={ method }
            onChange={ onChange }
            aria-label="Método de pagamento"
            required
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          TAG
          <select
            id="tag"
            name="tag"
            value={ tag }
            onChange={ onChange }
            aria-label="TAG"
            required
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  coin: PropTypes.string.isRequired,
  coins: PropTypes.arrayOf(PropTypes.string).isRequired,
  paymentType: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default Select;
