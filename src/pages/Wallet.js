import React from 'react';
import Header from '../component/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <form>
          <label htmlFor="value">
            Valor:
            <input type="text" name="value" />
          </label>
          <label htmlFor="description">
            Descrição:
            <input type="text" name="description" />
          </label>
          <label htmlFor="coin">
            Moeda:
            <select name="coin">
              <option>Vazio</option>
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento:
            <select name="payment">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select name="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Wallet;
