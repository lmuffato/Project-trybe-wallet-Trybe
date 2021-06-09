import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';
import './Header.css';

class Header extends Component {
  form() {
    return (
      <div>
        <form action="#">
          <label htmlFor="value">
            Valor:
            <input type="number" name="" id="value" />
          </label>
          <label htmlFor="coin">
            Moeda:
            <select name="coin" id="coin">
              <option value="USD">USD</option>
            </select>
          </label>
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
    console.log(email);
    return (
      <div className="header-container">
        <div className="header-top">
          <img src="https://www.pngkey.com/png/full/493-4930874_bill-png-vector-money-logo-png.png" width="80px" alt="logo-money" />
          <h3 data-testid="email-field">{email}</h3>
          <h3 data-testid="total-field">0</h3>
          <h3 data-testid="header-currency-field">BRL</h3>
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
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
