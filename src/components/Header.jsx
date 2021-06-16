import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  handleExpenses() {
    const { expenses } = this.props;
    const expensesValues = expenses.map((expenseValue) => {
      const { currency } = expenseValue;
      const rate = expenseValue.exchangeRates[currency].ask;
      const valueTimesRate = parseFloat(expenseValue.value) * parseFloat(rate);
      return valueTimesRate;
    });
    const totalSum = expensesValues.reduce(((acc, curr) => acc + parseFloat(curr)), 0);
    return totalSum;
  }

  render() {
    const { email } = this.props;
    const total = this.handleExpenses();
    return (
      <div>
        <p data-testid="email-field">
          Bem vindo:
          {' '}
          { email }
        </p>
        <p data-testid="total-field">
          Total gasto:
          { total }
        </p>
        <p data-testid="header-currency-field">BRL</p>
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
  expenses: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, null)(Header);
