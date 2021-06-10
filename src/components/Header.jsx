import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filteringExpense } from '../utils/walletContext';

function Header(props) {
  const { user, expenses } = props;

  const handleCurrencyType = (expense) => {
    const currencyType = filteringExpense(expense);
    return Number(currencyType[0].ask * expense.value).toFixed(2);
  };

  const handleExpensesSum = () => {
    const totalExpenses = expenses
      .map((expense) => Number(handleCurrencyType(expense)));
    const total = totalExpenses.reduce((prevAmount, amount) => prevAmount + amount, 0);
    return total;
  };

  return (
    <header>
      <strong data-testid="email-field">{user.email}</strong>
      <span data-testid="total-field">
        { handleExpensesSum() }
      </span>
      <span data-testid="header-currency-field">BRL</span>
    </header>
  );
}

const mapStateToProps = (state) => ({
  user: {
    email: state.user.email,
  },
  expenses: state.wallet.expenses,
  totalAmount: state.wallet.totalAmount,
});

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
export default connect(mapStateToProps, null)(Header);
