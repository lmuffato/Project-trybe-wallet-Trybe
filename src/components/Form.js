import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
    };

    this.requestCurrencies = this.requestCurrencies.bind(this);
  }

  componentDidMount() {
    this.requestCurrencies();
  }

  async requestCurrencies() {
    await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((response) => this.setState({
        currencies: Object.keys(response),
      }));
  }

  render() {
    const { currencies } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor
            <input type="number" name="value" id="value" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" name="description" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency">
              {currencies.map((currency) => (
                currency === 'USDT' ? null
                  : (<option key={ currency }>{currency}</option>)
              ))}
            </select>
          </label>
          <label htmlFor="Payment-method">
            Método de pagamento
            <select id="Payment-method">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de débito">Cartão de débito</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
