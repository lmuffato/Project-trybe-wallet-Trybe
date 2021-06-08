import React from 'react';

const tags = {
  food: 'Alimentação',
  leisure: 'Lazer',
  work: 'Trabalho',
  transport: 'Transporte',
  healthy: 'Saúde',
};

const paymentOptions = {
  cash: 'Dinheiro',
  c_credit: 'Cartão de crédito',
  c_debit: 'Cartão de débito',
};

function ExpensesForm() {
  return (
    <form>
      <label htmlFor="value">
        Valor:
        <input id="value" type="text" />
      </label>

      <label htmlFor="description">
        Descrição:
        <textarea id="description" />
      </label>

      <label htmlFor="currency">
        Moeda:
        <select id="currency">
          <option value="" disabled>Selecione uma moeda</option>
        </select>
      </label>

      <label htmlFor="payment-option">
        Método de pagamento:
        <select id="payment-option">
          {Object.entries(paymentOptions).map(([value, name]) => (
            <option key={ value } value={ value }>{name}</option>
          ))}
        </select>
      </label>

      <label htmlFor="tag">
        Tag:
        <select id="tag">
          {Object.entries(tags).map(([value, name]) => (
            <option key={ value } value={ value }>{name}</option>
          ))}
        </select>
      </label>
    </form>
  );
}

export default ExpensesForm;
