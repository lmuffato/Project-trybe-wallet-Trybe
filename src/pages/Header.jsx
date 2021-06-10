import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string, func } from 'prop-types';
import { getExchangeThunk, expensesThunk } from '../actions/index';
import './Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { wallet } = this.props;
    wallet();
    // addExpenses();
  }

  // função criada com ajuda do PR#38 do Adelino Junior
  handleChange({ target: { name, value } }) {
    const { expenses } = this.props;
    this.setState({
      id: expenses.length ? expenses.length : 0,
      [name]: value,
    });
  }

  options() {
    const { currencies, expenses } = this.props;
    console.log(expenses);
    return (
      <label htmlFor="currency">
        Moeda:
        <select name="currency" id="currency" onChange={ this.handleChange }>
          {currencies
            .map((currency, id) => (
              <option
                key={ id }
                value={ currency }
              >
                {currency}
              </option>
            ))}
        </select>
      </label>
    );
  }

  form() {
    const { addExpenses } = this.props;
    return (
      <div>
        <form action="#">
          <label htmlFor="value">
            Valor:
            <input type="number" name="value" id="value" onChange={ this.handleChange } />
          </label>
          {this.options()}
          <label htmlFor="method">
            Método de pagamento:
            <select name="method" id="method" onChange={ this.handleChange }>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select name="tag" id="tag" onChange={ this.handleChange }>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <label htmlFor="description">
            Descrição:
            <input
              type="text"
              name="description"
              id="description"
              onChange={ this.handleChange }
            />
          </label>
          <button type="button" onClick={ () => { addExpenses(this.state); } }>
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }

  render() {
    const { email, expenses } = this.props;
    const totalValue = expenses
      .reduce((acc, curr) => {
        console.log(Number(curr.value));
        const { currency } = curr;
        return acc + (Number(curr.value) * curr.exchangeRates[currency].ask);
      }, 0);
    console.log(expenses);
    return (
      <div className="header-container">
        <div className="header-top">
          <img src="https://www.pngkey.com/png/full/493-4930874_bill-png-vector-money-logo-png.png" width="80px" alt="logo-money" />
          <div className="exchange-values">
            <h3 data-testid="email-field">{email}</h3>
            <h3 data-testid="header-currency-field">BRL</h3>
            <h3 data-testid="total-field">{totalValue}</h3>
          </div>
        </div>
        <div className="form-container">
          {this.form()}
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  email: string,
  wallet: func,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  wallet: (payload) => dispatch(getExchangeThunk(payload)),
  addExpenses: (payload) => dispatch(expensesThunk(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
