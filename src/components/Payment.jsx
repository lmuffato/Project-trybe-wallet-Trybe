import React from 'react';

class Payment extends React.Component {
  render() {
    return (
      <label htmlFor="payment">
        Método de pagamento:
        <select id="payment">
          <option value="cash">Dinheiro</option>
          <option value="credit">Cartão de crédito</option>
          <option value="debit">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

export default Payment;
