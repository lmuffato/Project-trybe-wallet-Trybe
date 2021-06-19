import React, { Component } from 'react';

export default class PaymentMethod extends Component {
  render() {
    return (
      <label htmlFor="payment">
        Método de pagamento
        <select id="payment">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }
}
