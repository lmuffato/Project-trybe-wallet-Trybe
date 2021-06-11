import React, { Component } from 'react';

class FormWallet extends Component {
  render() {
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
            <option value="" disabled>Selecione uma moeda</option>
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
