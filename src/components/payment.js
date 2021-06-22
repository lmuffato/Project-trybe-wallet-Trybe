import React, { Component } from 'react';

class Payment extends Component {
  render() {
    return (
      <label htmlFor="methodPayment">
        Método de pagamento:
        <select
          name="methodPayment"
          value=""
          id="methodPayment"
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }
}

export default Payment;
