import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { onChange, coin, coins, paymentType, tag } = this.props;
    return (
      <>
        <label htmlFor="coin">
          Moeda
          <select name="coin" value={ coin } onChange={ onChange } aria-label="Moeda">
            {coins.map((coinType) => (coinType !== 'USDT'
              ? <option key={ coinType }>{coinType}</option> : ''))}
          </select>
        </label>
        <label htmlFor="paymentType">
          Método de pagamento
          <select
            name="paymentType"
            value={ paymentType }
            onChange={ onChange }
            aria-label="Método de pagamento"
            required
          >
            <option value="money">Dinheiro</option>
            <option value="credit">Cartão de Crédito</option>
            <option value="debit">Cartão de Débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          TAG
          <select
            name="tag"
            value={ tag }
            onChange={ onChange }
            aria-label="TAG"
            required
          >
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </>
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
