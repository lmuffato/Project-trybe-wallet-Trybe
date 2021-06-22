import React, { Component } from 'react';

class Forms extends Component {
  qualquer() {
    return (
      <label htmlFor="input-value">
        Valor
        <input
          type="text"
          name="name"
          id="input-value"
        />
      </label>
    );
  }

  render() {
    return (
      <form>
        { this.qualquer() }
        <label htmlFor="input-description">
          Descrição
          <input
            type="text"
            name="name"
            id="input-description"
          />
        </label>
        <label htmlFor="input-currency">
          Moeda
          <select
            name="name"
            id="input-currency"
          >
            <option value="brl">BRL</option>
          </select>
        </label>
        <label htmlFor="input-payment">
          Método de pagamento
          <select
            name="name"
            id="input-payment"
          >
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="input-tag">
          Tag
          <select
            name="name"
            id="input-tag"
          >
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Forms;
