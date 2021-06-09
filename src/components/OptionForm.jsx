import React, { Component } from 'react';

class OptionForm extends Component {
  render() {
    return (
      <div>
        <label htmlFor="payment">
          Método de pagamento:
          <select id="payment">
            <option>Dinheiro</option>
            <option>Cartão de Crédito</option>
            <option>Cartão de Débito</option>
            <option>Débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

export default OptionForm;
