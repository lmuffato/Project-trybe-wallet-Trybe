import React, { Component } from 'react';

class form extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor:
            <input type="text" id="value" placeholder="Valor" />
          </label>
          <label htmlFor="coin">
            Moeda:
            <select id="coin">{ }</select>
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
          <label htmlFor="description">
            Descrição:
            <input type="text" id="description" placeholder="Descrição" />
          </label>
        </form>
      </div>
    );
  }
}

export default form;
