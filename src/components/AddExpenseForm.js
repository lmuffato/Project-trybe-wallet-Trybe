import React from 'react';

class AddExpenseForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="number" id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" id="description" />
        </label>
        <label htmlFor="select-currency">
          Moeda
          <select id="select-currency">
            <option>BRL</option>
            <option>USD</option>
            <option>EUR</option>
          </select>
        </label>
        <label htmlFor="select-payment-method">
          Método de pagamento
          <select id="select-payment-method">
            <option>Dinheiro</option>
            <option>Cartão de Crédito</option>
            <option>Cartão de Débito</option>
          </select>
        </label>
        <label htmlFor="select-tag">
          Tag
          <select id="select-tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddExpenseForm;
