import React, { Component } from 'react';

class Forms extends Component {
  render() {
    const payments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input id="valor" type="number" name="name" />
        </label>
        <label htmlFor="descrição">
          Descrição
          <input id="descrição" type="text" name="name" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            <option>
              Vazio
            </option>
          </select>
        </label>
        <label htmlFor="método">
          Método de pagamento
          <select id="método">
            {payments.map((payment, index) => <option key={ index }>{payment}</option>)}
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            {tag.map((payment, index) => <option key={ index }>{payment}</option>)}
          </select>
        </label>
      </form>
    );
  }
}

export default Forms;
