import React from 'react';
import { connect } from 'react-redux';
import updateCurrency from '../actions';

const endpointAPI = 'https://economia.awesomeapi.com.br/json/all';

class WalletFrom extends React.Component {
  constructor() {
    super();
    this.state = {
      currencyList: {},
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const response = await fetch(endpointAPI);
    const apiData = await response.json();
    console.log(apiData);
    this.setState({ currencyList: apiData });
  }

  render() {
    const { currencyList } = this.state;
    const currenciesData = Object.keys(currencyList);
    const filtCurrency = currenciesData.filter((currency) => currency !== 'USDT');
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
            {filtCurrency.map((currency) => <option key={ currency }>{currency}</option>)}
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

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchtoProps = (dispatch) => ({
  updateCurrenciesList: () => dispatch(updateCurrency()),
});

export default connect(mapStateToProps, mapDispatchtoProps)(WalletFrom);
