import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input id="value" type="number" name="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea id="description" type="text" name="description" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" name="currency">
            <option>BRL</option>
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment" name="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag">
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

export default Form;
