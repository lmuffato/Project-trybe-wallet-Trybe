import React, { Component } from 'react';

export default class ExpenseForm extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="Valor" name="Valor">
            Valor:
            <input type="text" id="Valor" />
          </label>
          <label htmlFor="Descrição">
            Descrição:
            <input type="text" id="Descrição" />
          </label>
          <label htmlFor="Moeda">
            Moeda
            <select id="Moeda">
              {}
            </select>
          </label>
          <label htmlFor="Método de pagamento">
            Método de pagamento
            <select id="Método de pagamento" name="Método de pagamento">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="Tag">
            Tag
            <select id="Tag" name="Tag">
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
