import React, { Component } from 'react';

class PaymentInput extends Component {
  render() {
    return (
      <label htmlFor="pagamento">
        Método de pagamento
        <select name="pagamento" id="pagamento">
          <option key="Dinheiro" value="payment">Dinheiro</option>
          <option key="Cartão de crédito" value="payment">Cartão de crédito</option>
          <option key="Cartão de débito" value="payment">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

export default PaymentInput;
