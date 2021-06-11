import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
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
    const { userEmail } = this.props;
    return (
      <div>
        <span data-testid="email-field">{`${userEmail}`}</span>
        <span data-testid="total-field">{ this.addValuesExpense().toFixed(2) }</span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
