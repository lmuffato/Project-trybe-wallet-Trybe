import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();
    this.totalExpenses = this.totalExpenses.bind(this);
  }

  totalExpenses() {
    const { expenses } = this.props;
    return expenses.reduce((accumulator, currentValue) => (
      accumulator + Number(currentValue.value
        * currentValue.exchangeRates[currentValue.currency].ask)
    ), 0).toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <span data-testid="email-field">
          Email:
          {email}
        </span>
        <span>Despesa Total:</span>
        <span data-testid="total-field">
          {this.totalExpenses()}
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

// function totalExpences entendi a logica consultando o pr do adelino https://github.com/tryber/sd-010-a-project-trybewallet/blob/adelinojnr-project-trybewallet/src/utils/funtions.js
