import React, { Component } from 'react';

export default class ExpensesAddForm extends Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" name="valor" />
        </label>
        <label htmlFor="descrição">
          Descrição
          <input type="text" name="descrição" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select
            name="moeda"
            id="moeda"
          >
            <option value="Vazio">Vazio</option>
          </select>
        </label>
        <label htmlFor="paymentType">
          Método de pagamento
          <select
            name="paymentType"
            id="paymentType"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            name="tag"
            id="tag"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}
