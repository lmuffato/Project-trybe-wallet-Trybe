import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
    const fetchApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    let response = await fetchApi.json();
    response = Object.keys(response);
    const preOrder = {
      name,
      desc,
      curr,
      paymethod,
      tag,
    };
    console.log(response && preOrder);
  }

  handleCost() {
    return (
      <label htmlFor="value">
        Nome:
        <input
          onChange={ (event) => this.handleChange(event.target) }
          type="text"
          name="name"
          id="value"
        />
      </label>
    );
  }

  handleDesc() {
    return (
      <label htmlFor="descrip">
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
      <label htmlFor="currency">
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
      <label htmlFor="PayMethod">
        Método:
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
      <label htmlFor="Tag">
        Método:
        <select
          name="tag"
          id="Tag"
          form="carform"
          onChange={ (event) => this.handleChange(event.target) }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Sáude">Sáude</option>
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
          Calcular
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  emailget: state.user.email,
});

Wallet.propTypes = {
  emailget: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Wallet);
