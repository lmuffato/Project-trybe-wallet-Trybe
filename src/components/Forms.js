import React from 'react';

class Forms extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="text" name="value" id="value" />
        </label>

        <label htmlFor="description">
          Descrição:
          <input type="text" name="description" id="description" />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select type="text" id="currency" name="currency">
            <option>
              {}
            </option>
          </select>
        </label>

        <label htmlFor="payment">
          Método de pagamento:
          <select type="text" id="payment" name="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          tag:
          <select type="text" id="tag" name="tag">
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

export default Forms;
