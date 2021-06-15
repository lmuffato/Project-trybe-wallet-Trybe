import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);

    this.getTotalValue = this.getTotalValue.bind(this);
  }

  getTotalValue() {
    const { expenses } = this.props;
    const num = 0;

    const reduceFunc = (acc, expense) => {
      const exchangeRate = expense.exchangeRates[expense.currency].ask;
      return acc + Number(expense.value) * exchangeRate;
    };
    const totalValue = expenses.length === 0
      ? 0
      : expenses.reduce(reduceFunc, num);

    return totalValue;
  }

  render() {
    const { email } = this.props;
    const currency = 'BRL';
    return (
      <header>
        <span data-testid="email-field">
          {`Email: ${email}`}
        </span>
        <span data-testid="total-field">
          { this.getTotalValue() }
        </span>
        <span data-testid="header-currency-field">
          {currency}
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
