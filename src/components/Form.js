import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: '',
      description: '',
      currency: '',
      payment: '',
      tag: '',
    };
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    })
  };

  render() {
    const { value, description } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor:
            <input type="text" name="value" id="value" value={ value }
              onChange={ (e) => this.handleChange(e) }
            />
          </label>
          <label htmlFor="description">
            Descrição:
            <input
              type="text" name="description" id="description" value={ description }
              onChange={ (e) => this.handleChange(e) }
            />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select name="currency" id="currency" /* onChange={ (e) => this.handleChange(e) }*//>
          </label>
          <label htmlFor="payment">
            Método de pagamento:
            <select name="payment" id="payment" /*onChange={ (e) => this.handleChange(e) }*/>
              <option value="money">Dinheiro</option>
              <option value="credit">Cartão de crédito</option>
              <option value="debit">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select name="tag" id="tag" /* onChange={ (e) => this.handleChange(e) }*/>
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}
