import React, { Component } from 'react';
import getCurrencies from '../services/api';

class FormWallet extends Component {
  constructor() {
    super();

    this.state = {
      currencies: {},
    };
  }

  componentDidMount() {
    this.loadCurrencies();
  }

  // Source: https://github.com/tryber/sd-010-a-project-trybewallet/tree/nascjoao-project-trybewallet
  async loadCurrencies() {
    const { USDT, ...currencies } = await getCurrencies();
    this.setState({
      currencies,
    });
  }

  render() {
    const { currencies } = this.state;
    return (
      <form action="">
        <label htmlFor="value">
          Valor
          <input id="value" type="text" />
        </label>

        <label htmlFor="description">
          Descrição
          <textarea id="description" />
        </label>

        <label htmlFor="currency">
          Moeda
          <select id="currency">
            {
              Object.keys(currencies).map((currency) => (
                <option key={ currency } value={ currency }>{currency}</option>
              ))
            }
          </select>
        </label>

        <label htmlFor="payment-option">
          Método de pagamento
          <select id="payment-option">
            <option value="cash">Dinheiro</option>
            <option value="c_credit">Cartão de crédito</option>
            <option value="c_debit">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag:
          <select id="tag">
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="healthy">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default FormWallet;
