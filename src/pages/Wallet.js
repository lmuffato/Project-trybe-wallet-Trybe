import React from 'react';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <header>
          <span data-testid="email-field">usuario@email.com</span>
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <form>
          <label htmlFor="input-value">
            Valor
            <input name="input-value" type="text" required />
          </label>
          <label htmlFor="input-description">
            Descrição
            <input name="input-description" type="text" required />
          </label>
          <label htmlFor="input-coin">
            Moeda
            <select aria-label="input-coin" />
          </label>
          <label htmlFor="input-payment-type">
            Método de pagamento
            <select name="input-payment-type" required>
              <option value="money">Dinheiro</option>
              <option value="credit">Cartão de Crédito</option>
              <option value="debit">Cartão de Débito</option>
            </select>
          </label>
          <label htmlFor="input-tag">
            TAG
            <select name="input-tag" required>
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Wallet;
