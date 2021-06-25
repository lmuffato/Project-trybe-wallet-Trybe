import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  totalExpenses() {
    const { expenses } = this.props;
    let sumExpenses = 0;
    expenses.forEach((expense) => {
      const { value, currency, exchangeRates } = expense;
      sumExpenses += value * exchangeRates[currency].ask;
    });
    return sumExpenses;
  }

  render() {
    const { email } = this.props;
    return (
      <>
        <h3 data-testid="email-field">
          { email}
          {' '}
        </h3>
        <h3 data-testid="total-field">
          {' '}
          { this.totalExpenses() }
          {' '}
        </h3>
        <h3 data-testid="header-currency-field"> BRL </h3>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
