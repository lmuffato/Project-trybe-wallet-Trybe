import React, { Component } from 'react';

export default class ExpenseForm extends Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input id="valor" type="number" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input id="description" type="text" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency">
            <option>1</option>
          </select>
        </label>
        <label htmlFor="payment-methods">
          Método de pagamento:
          <select id="payment-methods">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expense">
          Tag:
          <select id="expense">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}
