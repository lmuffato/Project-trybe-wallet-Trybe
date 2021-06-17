import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { total, wallet } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencySelect: [],
      name: null,
      desc: null,
      curr: 'USD',
      paymethod: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleCost = this.handleCost.bind(this);
    this.handleDesc = this.handleDesc.bind(this);
    this.handleCurrency = this.handleCurrency.bind(this);
    this.handlePayMeth = this.handlePayMeth.bind(this);
    this.handleTag = this.handleTag.bind(this);
    this.getQuestions = this.getCurrency.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getCurrency();
  }

  async getCurrency() {
    const fetchApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    let response = await fetchApi.json();
    response = Object.keys(response);
    response = response.filter((coin) => coin !== 'USDT');
    response = response.filter((coin) => coin !== 'DOGE');
    this.setState({
      currencySelect: response,
    });
  }

  handleChange(target) {
    this.setState({
      [target.name]: target.value,
    });
  }

  async handleClick() {
    const { curr, tag, paymethod, name, desc } = this.state;
    const { walletInsert, walletTotal, totalCurrency, walletStore } = this.props;
    const fetchApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await fetchApi.json();
    const parseTotalBefore = parseFloat(totalCurrency);
    const parseTotalafter = parseFloat(name);
    const parseTotalafterMult = parseTotalafter * response[curr].ask;
    console.log(parseTotalafterMult);
    const totalFinal = parseTotalBefore + parseFloat(parseTotalafterMult);
    const preOrder = {
      id: walletStore.length,
      value: name,
      currency: curr,
      method: paymethod,
      tag,
      description: desc,
      exchangeRates: response,
    };
    await walletTotal(totalFinal);
    await walletInsert(preOrder);
  }

  handleCost() {
    return (
      <label name="Valor" htmlFor="value">
        Valor:
        <input
          onChange={ (event) => this.handleChange(event.target) }
          type="number"
          step="0.01"
          name="name"
          id="value"
        />
      </label>
    );
  }

  handleDesc() {
    return (
      <label name="Descrição" htmlFor="descrip">
        Descrição:
        <input
          onChange={ (event) => this.handleChange(event.target) }
          type="text"
          name="desc"
          id="descrip"
        />
      </label>
    );
  }

  handleCurrency() {
    const { currencySelect } = this.state;
    return (
      <label name="Moeda" htmlFor="currency">
        Moeda:
        <select
          name="curr"
          id="currency"
          onChange={ (event) => this.handleChange(event.target) }
          form="carform"
        >
          {currencySelect.map((curr) => <option key={ curr }>{`${curr}`}</option>)}
        </select>
      </label>
    );
  }

  handlePayMeth() {
    return (
      <label name="Método de pagamento" htmlFor="PayMethod">
        método de pagamento:
        <select
          name="paymethod"
          id="PayMethod"
          form="carform"
          onChange={ (event) => this.handleChange(event.target) }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  handleTag() {
    return (
      <label name="tag" htmlFor="tag">
        tag
        <select
          name="tag"
          form="carform"
          id="tag"
          onChange={ (event) => this.handleChange(event.target) }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Sáude">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form>
        {this.handleCost()}
        {this.handleDesc()}
        {this.handleCurrency()}
        {this.handlePayMeth()}
        {this.handleTag()}
        <button
          type="button"
          onClick={ () => this.handleClick() }
        >
          adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  walletInsert: (payload) => dispatch(wallet(payload)),
  walletTotal: (payload) => dispatch(total(payload)),
});

const mapStateToProps = (state) => ({
  totalCurrency: state.wallet.totalCurrency,
  walletStore: state.wallet.expenses,
});

Wallet.propTypes = {
  wallet: PropTypes.arrayOf(PropTypes.object),
  totalCurrency: PropTypes.number.isRequired,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
