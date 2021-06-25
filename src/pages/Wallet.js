import React from 'react';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <form>
          <label htmlFor="expense-value">
            Valor
            <input type="number" id="expense-value" />
          </label>
          <label htmlFor="expense-description">
            Descrição
            <input type="text" id="expense-description" />
          </label>
          <label htmlFor="expense-currency">
            Moeda
            <select id="expense-currency">
              {}
            </select>
          </label>
          <label htmlFor="expense-payment-method">
            Método de pagamento
            <select id="expense-payment-method">
              <option value="money">Dinheiro</option>
              <option value="credit-card">Cartão de Crédito</option>
              <option value="debit-card">Cartão de Débito</option>
            </select>
          </label>
          <label htmlFor="expense-tag">
            Tag
            <select id="expense-tag">
              <option value="food">Alimentação</option>
              <option value="entertainment">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}

export default Wallet;
