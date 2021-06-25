import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.sumExpenses = this.sumExpenses.bind(this);
  }

  sumExpenses() {
    const { expenses } = this.props;
    if (expenses.length === 0) {
      return 0;
    }
    const arrayValues = expenses.map((expense) => {
      const { value, currency, exchangeRates } = expense;
      const userValue = exchangeRates[currency].ask;
      return value * userValue;
    });
    return arrayValues.reduce((acc, curValue) => acc + curValue);
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <span data-testid="email-field">{`Email: ${email}`}</span>
        <span data-testid="total-field">
          Despesa total:
          {this.sumExpenses()}
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
