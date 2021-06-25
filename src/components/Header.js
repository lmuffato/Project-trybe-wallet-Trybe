import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
/* import { getCurrencySuccess } from '../actions/wallet'; */

class Header extends Component {
  sumExpenses(arr) {
    return arr.reduce(
      (acc, cur) => acc + cur.value * cur.exchangeRates[cur.currency].ask, 0,
    );
  }

  render() {
    const { email, expenses } = this.props;
    const totalExpense = this.sumExpenses(expenses);
    return (
      <div>
        <span data-testid="email-field">
          { email }
        </span>
        <span data-testid="total-field">
          Despesa Total:
          { ` ${totalExpense.toFixed(2)}` }
        </span>
        <span data-testid="header-currency-field"> BRL </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(Header);
