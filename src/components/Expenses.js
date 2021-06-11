import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletExpenses extends Component {
  constructor() {
    super();
    this.totalValue = this.totalValue.bind(this);
  }

  totalValue() {
    const { expenses } = this.props;
    let total = 0;
    if (!expenses) {
      return total;
    }
    expenses.forEach((expense) => {
      const { currency, exchangeRates } = expense;
      total += expense.value * exchangeRates[currency].ask;
    });
    return total;
  }

  render() {
    return (
      <div>
        <p data-testid="total-field">
          {`Despesa total: ${this.totalValue()}`}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

WalletExpenses.propTypes = {
  expenses: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, null)(WalletExpenses);
