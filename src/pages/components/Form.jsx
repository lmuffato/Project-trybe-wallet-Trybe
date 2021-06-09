import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: '',
      description: '',
      currency: '',
      paymentMethod: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit(e) {
    console.log(e.target.value);
  }

  render() {
    const { state: { value, description }, handleChange, handleSubmit } = this;
    return (
      <form onSubmit={ handleSubmit }>
        <label htmlFor="value">
          Valor
          <input id="value" type="number" value={ value } onChange={ handleChange } />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            id="description"
            type="text"
            value={ description }
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select id="currency">
            <option>a</option>
          </select>
        </label>

        <label htmlFor="paymentMethod">
          Método de pagamento:
          <select id="paymentMethod">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag:
          <select id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>

        <button type="submit">Adicionar Despesa</button>
      </form>
    );
  }
}
