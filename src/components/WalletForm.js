import React from 'react';
// import { connect } from 'react-redux';

function WalletForm() {
  return (
    <form>
      <label htmlFor="expense-value">
        Valor:
        <input id="expense-value" type="text" name="value" />
      </label>
      <label htmlFor="expense-description">
        Descrição:
        <input id="expense-description" type="text" name="description" />
      </label>
      <label htmlFor="expense-currency">
        Moeda:
        <select id="expense-currency" name="currency">
          <option value=""> </option>
        </select>
      </label>
      <label htmlFor="expense-payment-option">
        Método de pagamento:
        <select id="expense-payment-option" name="payoption">
          <option value="money">Dinheiro</option>
          <option value="credit">Cartão de Crédito</option>
          <option value="debit">Cartão de Débito</option>
        </select>
      </label>
      <label htmlFor="expense-category">
        Tag:
        <select id="expense-category" name="category">
          <option value="feeding">Alimentação</option>
          <option value="lounge">Lazer</option>
          <option value="work">Trabalho</option>
          <option value="transport">Transporte</option>
          <option value="health">Saúde</option>
        </select>
      </label>
    </form>
  );
}

export default WalletForm;
