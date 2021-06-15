import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletHeader extends React.Component {
  constructor() {
    super();
    this.totalExpenses = this.totalExpenses.bind(this);
  }

  totalExpenses() {
    const { allExpenses } = this.props;
    return allExpenses.reduce((acc, currentExpense) => {
      const currentAsk = currentExpense.exchangeRates[currentExpense.currency].ask;
      return acc + (Number(currentExpense.value) * Number(currentAsk));
    }, 0);
  }

  render() {
    const { email } = this.props;
    const totalExpenses = this.totalExpenses();
    return (
      <header>
        <span>Trybe</span>
        <p>
          Email:
          <span data-testid="email-field">{email}</span>
        </p>
        <p>
          Despesa Total:
          <span data-testid="total-field">{ totalExpenses }</span>
          <span data-testid="header-currency-field">BRL</span>
        </p>
      </header>
    );
  }
}

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
  allExpenses: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  allExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletHeader);
