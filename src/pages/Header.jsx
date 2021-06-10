import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string, func } from 'prop-types';
import { getExchangeThunk } from '../actions/index';
import './Header.css';

class Header extends Component {
  componentDidMount() {
    const { wallet } = this.props;
    wallet();
  }

  options() {
    const { currencies } = this.props;
    console.log(currencies);
    return (
      <label htmlFor="coin">
        Moeda:
        <select name="coin" id="coin">
          {currencies
            .map((currency, id) => (
              <option
                key={ id }
                value={ currency.code }
              >
                {currency.code}
              </option>
            ))}
        </select>
      </label>
    );
  }

  form() {
    return (
      <div>
        <form action="#">
          <label htmlFor="value">
            Valor:
            <input type="number" name="" id="value" />
          </label>
          {this.options()}
          <label htmlFor="payment-method">
            Método de pagamento:
            <select name="coin" id="payment-method">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tags">
            Tag:
            <select name="coin" id="tags">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <label htmlFor="description">
            Descrição:
            <input type="text" name="" id="description" />
          </label>
          <button type="button">Adicionar despesa</button>
        </form>
      </div>
    );
  }

  render() {
    const { email } = this.props;
    return (
      <div className="header-container">
        <div className="header-top">
          <img src="https://www.pngkey.com/png/full/493-4930874_bill-png-vector-money-logo-png.png" width="80px" alt="logo-money" />
          <div className="exchange-values">
            <h3 data-testid="email-field">{email}</h3>
            <h3 data-testid="header-currency-field">BRL</h3>
            <h3 data-testid="total-field">0</h3>
          </div>
        </div>
        <div className="form-container">
          {this.form()}
        </div>
        <div className="legend-container">
          <ul className="legend">
            <li>Descrição</li>
            <li>Tag</li>
            <li>Método de Pagamento</li>
            <li>Valor</li>
            <li>Moeda</li>
            <li>Câmbio utilizado</li>
            <li>Valor convetido</li>
            <li>Moeda de conversão</li>
            <li>Editar/Excluir</li>

          </ul>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
