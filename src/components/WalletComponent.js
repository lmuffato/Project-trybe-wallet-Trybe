import React from 'react';

class WalletComponent extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="totalValue">
          {' '}
          Total Value:
          <input type="number" data-testid="total-field" id="totalValue" value="0" />
        </label>

        <label htmlFor="currency">
          Currency:
          <input type="dropdown" data-testid="header-currency-field" value="BRL" />
        </label>

        <label htmlFor="value">
          Valor:
          <input type="text" name="value" id="value" />
        </label>

        <label htmlFor="description">
          Descrição:
          <input type="text" name="description" id="description" />
        </label>

        <label htmlFor="currency">
          Moeda
          <select type="text" name="currency" id="currency"> </select>
        </label>

        <label htmlFor="payment">
          Método de pagamento
          <select type="text" name="payment" id="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expenses">
          Tag
          <select type="text" name="expenses" id="expenses">
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

export default WalletComponent;
