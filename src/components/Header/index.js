import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);

    this.expensesFilter = this.expensesFilter.bind(this);
    this.totalExpenses = this.totalExpenses.bind(this);
    this.currencyType = this.currencyType.bind(this);
  }

  expensesFilter(expense) {
    const filterExpense = Object.values(
      expense.exchangeRates,
    ).filter((curr) => (
      curr.code === expense.currency
    ));
    return filterExpense;
  }

  currencyType(expense) {
    const currencyType = this.expensesFilter(expense);
    return Number(currencyType[0].ask * expense.value).toFixed(2);
  }

  totalExpenses() {
    const { expenses } = this.props;
    const totalExpenses = expenses
      .map((expense) => Number(this.currencyType(expense)));
    const total = totalExpenses.reduce((prevAmount, amount) => prevAmount + amount, 0);
    return total;
  }

  render() {
    const { user } = this.props;

    return (
      <header>
        <span>Email: </span>
        <span
          data-testid="email-field"
        >
          { user.email }
        </span>
        <span>Despesa Total: </span>
        <span
          data-testid="total-field"
        >
          { this.totalExpenses() }
        </span>
        <span
          data-testid="header-currency-field"
        >
          BRL
        </span>
      </header>
    );
  }
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
  totalAmount: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps, null)(Header);
