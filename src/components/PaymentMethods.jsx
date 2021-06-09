import React from 'react';

function PaymentMethods() {
  return (
    <label htmlFor="payment-method">
      Método de pagamento
      <select name="payment-method" id="payment-method">
        <option value="money">Dinheiro</option>
        <option value="credit">Cartão de crédito</option>
        <option value="debit">Cartão de débito</option>
      </select>
    </label>
  );
}

export default PaymentMethods;
