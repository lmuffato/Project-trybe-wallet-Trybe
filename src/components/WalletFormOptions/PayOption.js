import React from 'react';
import { func } from 'prop-types';

export default function PayOption(props) {
  const { handleInput, payoption } = props;
  return (
    <label htmlFor="expense-payment-option">
      Método de pagamento:
      <select
        id="expense-payment-option"
        name="payoption"
        value={ payoption }
        onChange={ handleInput }
      >
        <option value="money">Dinheiro</option>
        <option value="credit">Cartão de Crédito</option>
        <option value="debit">Cartão de Débito</option>
      </select>
    </label>
  );
}

PayOption.propTypes = {
  PayOption: func,
}.isRequired;
