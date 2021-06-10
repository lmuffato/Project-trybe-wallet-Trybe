import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Header({ user, expenses }) {
  function sumExpenses() {
    const values = expenses.map((expense) => {
      const exchange = expense.exchangeRates[expense.currency];
      const convertedValue = (exchange.ask * expense.value).toFixed(2);
      return convertedValue;
    });

    const total = values.reduce(
      (amount, currentValue) => amount + Number(currentValue), 0,
    );
    return total;
  }

  const expensesTotal = sumExpenses();

  return (
    <header>
      <span data-testid="email-field">{user.email}</span>
      <span data-testid="total-field">{expensesTotal}</span>
      <span data-testid="header-currency-field">BRL</span>
    </header>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
  expenses: PropTypes.array,
}.isRequired;

const mapStateToProps = ({ user, wallet: { expenses } }) => ({
  user,
  expenses,
});

export default connect(mapStateToProps)(Header);
