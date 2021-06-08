import React from 'react';
// import { Form, Label, input, Select, Option } from './style';

const AddDebitForm = () => (
  <form>
    <label htmlFor="value">
      Valor:
      <input type="text" id="value" />
    </label>

    <label htmlFor="description">
      Descrição:
      <input type="text" id="description" />
    </label>

    <label htmlFor="currency">
      Moeda:
      <select id="currency">
        <option value="" selected disabled>Selecione uma moeda</option>
      </select>
    </label>

    <label htmlFor="payment">
      Método de pagamento:
      <select id="payment">
        <option value="" selected disabled>Selecione</option>
        <option value="">Dinheiro</option>
        <option value="">Cartão de crédito</option>
        <option value="">Cartão de débito</option>
      </select>
    </label>

    <label htmlFor="category">
      Tag:
      <select id="category">
        <option value="" selected disabled>Selecione uma tag</option>
        <option value="">Alimentação</option>
        <option value="">Lazer</option>
        <option value="">Trabalho</option>
        <option value="">Transporte</option>
        <option value="">Saúde</option>
      </select>
    </label>
  </form>
);

export default AddDebitForm;
