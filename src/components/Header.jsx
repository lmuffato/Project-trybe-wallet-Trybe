import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.sumExpensives = this.sumExpensives.bind(this);
  }

  sumExpensives() {
    const { expenses } = this.props;
    const expensesMap = expenses.map(({ currency, value, exchangeRates }) => {
      const actualCurrency = exchangeRates[currency];
      const sumAll = Number(value) * Number(actualCurrency.ask);
      return sumAll;
    });
    return expensesMap.reduce((total, expense) => total + expense, 0);
  }

  // Função SumExpensives feito com ajuda do plantão.

  render() {
    const { email } = this.props;
    return (
      <header>
        <div>
          <h3 data-testid="email-field">{ email }</h3>
          <span data-testid="total-field">{ this.sumExpensives() }</span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Header);
