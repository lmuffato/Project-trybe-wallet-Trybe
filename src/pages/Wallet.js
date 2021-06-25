import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import Header from '../components/Header';
import { addCurrencyApiThunk,
  addRecordWallet } from '../actions/index';
import getCurrency from '../services/FetchApi';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleState = this.handleState(this);
  }

  componentDidMount() {
    const { getCurrencys } = this.props;
    getCurrencys();
    // console.log(getCurrency);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
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
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  handleDescription() {
    return (
      <label htmlFor="description">
        Descrição
        <input
          id="description"
          type="text"
          placeholder="descrição"
          name="description"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  handleCurrency() {
    const { currencies } = this.props;
    // console.log(currencies);
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          id="currency"
          onChange={ this.handleChange }
          name="currency"
        >
          {
            Object.keys(currencies).map((currency) => (
              <option key={ currency } value={ currency }>{currency}</option>
            ))
          }
        </select>
      </label>
    );
  }

  handlePayment() {
    const methodPayment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <label htmlFor="payment">
        Método de pagamento:
        <select
          id="payment"
          onChange={ this.handleChange }
          name="method"
        >
          {
            methodPayment.map((payment) => (
              <option key={ payment } value={ payment }>{payment}</option>
            ))
          }
        </select>
      </label>
    );
  }

  handleState() {
    const { id } = this.state;
    getCurrency()
      .then((res) => {
        const { wallets } = this.props;
        const { ...moeda } = res;
        this.setState({ id: id + 1, exchangeRates: moeda });
        wallets({ ...this.state, id });
      })
      .catch((error) => error);
  }

  handleCategory() {
    return (
      <label htmlFor="category">
        Tag:
        <select
          id="category"
          onChange={ this.handleChange }
          name="tag"
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
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
          <button
            type="button"
            onClick={ this.handleState }
          >
            Adicionar despesa
          </button>
        </form>
        TrybeWallet
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrencys: () => dispatch(addCurrencyApiThunk()),
  wallets: (state) => dispatch(addRecordWallet(state)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Wallet.propTypes = {
  getCurrencys: Proptypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
