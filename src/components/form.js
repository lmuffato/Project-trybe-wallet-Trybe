import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="number" id="valor" />
        </label>
        <label htmlFor="describe">
          Descrição
          <input type="text" id="describe" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            <option> vazio </option>
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento
          <select id="payment-method">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-payment">
          Tag
          <select id="tag-payment">
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

export default Form;
