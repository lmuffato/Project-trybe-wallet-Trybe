import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
    };
    this.renderExpensesValues = this.renderExpensesValues.bind(this);
    this.renderExpensesDescription = this.renderExpensesDescription.bind(this);
    this.renderExpensesCurrency = this.renderExpensesCurrency.bind(this);
    this.renderPaymentMethod = this.renderPaymentMethod.bind(this);
    this.renderExpensesTag = this.renderExpensesTag.bind(this);
    this.fetchCurrency = this.fetchCurrency.bind(this);
  }

  componentDidMount() {
    this.fetchCurrency();
  }

  async fetchCurrency() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const asArray = Object.entries(data).filter((ele) => ele[0] !== 'USDT'
      && ele[0] !== 'DOGE');
    this.setState({
      currencies: [...asArray],
    });
  }

  renderExpensesValues() {
    return (
      <label htmlFor="expenses">
        Valor
        <input
          id="expenses"
          type="number"
        />
      </label>
    );
  }

  renderExpensesDescription() {
    return (
      <label htmlFor="description">
        Descrição
        <input
          id="description"
          type="text"
        />
      </label>
    );
  }

  renderExpensesCurrency() {
    const { currencies } = this.state;
    const options = currencies.map((ele) => (
      <option value={ ele[0] } key={ ele[0] }>
        { ele[0] }
      </option>));
    return (
      <label htmlFor="currency">
        Moeda
        <select id="currency" name="currency">
          { options }
        </select>
      </label>
    );
  }

  renderPaymentMethod() {
    return (
      <label htmlFor="payment">
        Método de pagamento
        <select id="payment" name="payment">
          <option value="credit">Cartão de crédito</option>
          <option value="debit">Cartão de débito</option>
          <option value="money">Dinheiro</option>
        </select>
      </label>
    );
  }

  renderExpensesTag() {
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag" name="tag">
          <option value="food">Alimentação</option>
          <option value="leisure">Lazer</option>
          <option value="work">Trabalho</option>
          <option value="transport">Transporte</option>
          <option value="health">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form>
        { this.renderExpensesValues() }
        <br />
        { this.renderExpensesDescription() }
        <br />
        { this.renderExpensesCurrency() }
        <br />
        { this.renderPaymentMethod() }
        <br />
        { this.renderExpensesTag() }
      </form>
    );
  }
}
