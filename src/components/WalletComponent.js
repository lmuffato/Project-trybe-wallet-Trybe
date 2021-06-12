import React from 'react';
import { tagItems, paymentMethods } from './walletIndex';
// import PropTypes from 'prop-types';

class WalletComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      currencyAPI: {},
    };
    this.getAPI = this.getAPI.bind(this);
  }

  componentDidMount() {
    const { currencyAPI } = this.state;
    this.getAPI();
    console.log(currencyAPI);
  }

  async getAPI() {
    const baseUrl = 'https://economia.awesomeapi.com.br/json/all';
    const endPoint = await fetch(baseUrl);
    const resolve = await endPoint.json();
    this.setState({ currencyAPI: resolve });
  }

  // referência Object.keys = https://stackoverflow.com/questions/14810506/map-function-for-objects-instead-of-arrays
  // referência Bruno trouxe a lógica do filter para tirarmos o USDT do array
  render() {
    const { currencyAPI } = this.state;
    const currencyKeys = Object.keys(currencyAPI);
    console.log(currencyKeys);
    return (
      <form>
        <label htmlFor="totalValue">
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
          <select type="text" name="currency" id="currency">
            {currencyKeys.filter((key) => key !== 'USDT')
              .map((pay, index) => <option key={ index }>{ pay }</option>)}
            );
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select type="text" name="payment" id="payment">
            {
              paymentMethods.map((pay, index) => (<option key={ index }>{pay}</option>))
            }
          </select>
        </label>
        <label htmlFor="expenses">
          Tag
          <select type="text" name="expenses" id="expenses">
            {
              tagItems.map((tag, index) => (<option key={ index }>{tag}</option>))
            }
          </select>
        </label>
      </form>
    );
  }
}

export default WalletComponent;
