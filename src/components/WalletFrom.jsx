import React from 'react';

class WalletFrom extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="text" id="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" id="description" />
        </label>
        <label htmlFor="select-currency">
          Moeda:
          <select id="select-currency">
            <option> </option>
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento:
          <select id="payment-method">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Tag:
          <select id="category">
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

export default WalletFrom;
