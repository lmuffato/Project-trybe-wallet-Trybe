import React from 'react';
import Header from '../components/Header';

class Wallet extends React.Component {
  // constructor() {
  //   super();
  // }

  handleValue() {
    return (
      <label htmlFor="value">
        Valor:
        <input
          id="value"
          type="text"
          placeholder="valor"
          name="value"
        />
      </label>
    );
  }

  handleDescription() {
    return (
      <label htmlFor="descrition">
        Descrição:
        <input
          id="description"
          type="text"
          placeholder="descrição"
          name="descrition"
        />
      </label>
    );
  }

  handleCurrency() {
    return (
      <label htmlFor="currency">
        Moeda
        {/* <select id="currency">
            {
              methodPayment.map((payment) => (
                <option key={ payment } value={ payment }>{payment}</option>
              ))
            }
          </select> */}
      </label>
    );
  }

  handlePayment() {
    const methodPayment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <label htmlFor="payment">
        Método de pagamento
        <select id="payment">
          {
            methodPayment.map((payment) => (
              <option key={ payment } value={ payment }>{payment}</option>
            ))
          }
        </select>
      </label>
    );
  }

  render() {
    return (
      <div>
        <Header />
        <form>
          { this.handleValue() }
          { this.handleDescription() }
          { this.handleCurrency() }
          { this.handlePayment() }
          <button type="button">Enviar</button>
        </form>
        TrybeWallet
      </div>
    );
  }
}

export default Wallet;
