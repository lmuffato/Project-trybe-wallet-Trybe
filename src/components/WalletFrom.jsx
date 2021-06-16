import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpense } from '../actions';

const endpointAPI = 'https://economia.awesomeapi.com.br/json/all';

class WalletFrom extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  async fetchAPI() {
    const response = await fetch(endpointAPI);
    const apiData = await response.json();
    this.setState({ exchangeRates: apiData });
  }

  // componentes tirados do render devido ao limite de linhas

  inputValue() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor
        <input
          id="value"
          type="number"
          name="value"
          value={ value }
          onChange={ (event) => this.handleChange(event) }
        />
      </label>
    );
  }

  inputDescription() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição:
        <input
          id="description"
          type="text"
          name="description"
          value={ description }
          onChange={ (event) => this.handleChange(event) }
        />
      </label>
    );
  }

  inputCurrency() {
    const { currency, exchangeRates } = this.state;
    const currenciesData = Object.keys(exchangeRates);
    const filtCurrency = currenciesData.filter((currencies) => currencies !== 'USDT');
    return (
      <label htmlFor="select-currency">
        Moeda:
        <select
          id="select-currency"
          type="select"
          name="currency"
          value={ currency }
          onChange={ (event) => this.handleChange(event) }
        >
          {filtCurrency.map((curr) => <option key={ curr }>{curr}</option>)}
        </select>
      </label>
    );
  }

  inputMethod() {
    const { method } = this.state;
    return (
      <label htmlFor="payment-method">
        Método de pagamento:
        <select
          id="payment-method"
          type="select"
          name="method"
          value={ method }
          onChange={ (event) => this.handleChange(event) }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  inputTag() {
    const { tag } = this.state;
    return (
      <label htmlFor="category">
        Tag:
        <select
          id="category"
          type="select"
          name="tag"
          value={ tag }
          onChange={ (event) => this.handleChange(event) }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  handleClick() {
    const { addExpenseDispatch } = this.props;
    const { id } = this.state;
    addExpenseDispatch(this.state);
    this.setState({
      id: id + 1,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    });
    this.fetchAPI();
  }

  render() {
    return (
      <form>
        {this.inputValue()}
        {this.inputDescription()}
        {this.inputCurrency()}
        {this.inputMethod()}
        {this.inputTag()}
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addExpenseDispatch: (state) => dispatch(addExpense(state)),
});

WalletFrom.propTypes = {
  addExpenseDispatch: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(WalletFrom);
