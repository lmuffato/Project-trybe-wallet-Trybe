import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();

    this.addValuesExpense = this.addValuesExpense.bind(this);
  }

  addValuesExpense() {
    const { expenses } = this.props;
    return expenses.reduce((acc, actual) => {
      const valueCurrency = actual.value;
      const askCurrency = actual.exchangeRates[actual.currency].ask;
      const total = valueCurrency * askCurrency;
      return acc + total;
    }, 0);
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">{ this.addValuesExpense() }</span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.defaultProps = {
  email: '',
};

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
