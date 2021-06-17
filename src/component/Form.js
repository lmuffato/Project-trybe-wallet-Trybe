import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="text"
            name="value"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
          />
        </label>

        <label htmlFor="select-coin">
          Moeda
          <select name="select-coin" />
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select name="payment">
            <option value="money">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debit card">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="despesas">
          Tag:
          <select id="despesas" name="despesas">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
          <label htmlFor="descricao">
            Descrição:
            <input type="text" id="descricao" name="descricao" />
          </label>
        </label>
      </form>
    );
  }
}

export default Form;