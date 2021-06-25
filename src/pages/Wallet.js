import React from 'react';
import Header from '../components/Header';
import getCurrency from '../services/FetchApi';

class Wallet extends React.Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {
    getCurrency();
    console.log(getCurrency());
  }

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
    const typeCurrency = getCurrency();
    console.log(typeCurrency);
    return (
      <label htmlFor="currency">
        Moeda:
        <select id="currency">
          {/* {
            getCurrency().map((currency) => (
              <option key={ currency } value={ currency }>{currency}</option>
            ))
          } */}
        </select>
      </label>
    );
  }

  handlePayment() {
    const methodPayment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <label htmlFor="payment">
        Método de pagamento:
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

  handleCategory() {
    return (
      <label htmlFor="category">
        Tag:
        <select id="category">
          <option value="tag">Alimentação</option>
          <option value="tag">Lazer</option>
          <option value="tag">Trabalho</option>
          <option value="tag">Transporte</option>
          <option value="tag">Saúde</option>
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
          { this.handleCategory() }
          <button type="button">Enviar</button>
        </form>
        TrybeWallet
      </div>
    );
  }
}

export default Wallet;
