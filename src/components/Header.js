import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();

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
    const { userEmail } = this.props;

    return (
      <div>
        <p data-testid="email-field">{`E-mail: ${userEmail}`}</p>
        <p data-testid="total-field">{ this.getTotalValue() }</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
