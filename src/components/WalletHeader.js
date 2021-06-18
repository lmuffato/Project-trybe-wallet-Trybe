import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../style/WalletHeader.css';

class WalletHeader extends React.Component {
  render() {
    const { user, expenses } = this.props;
    let totalExpensesValue = 0;
    if (expenses.length > 0) {
      totalExpensesValue = expenses.reduce((accum, expense) => {
        const expenseValue = parseFloat(expense.value);
        const expenseCurrency = expense.exchangeRates[expense.currency];
        const expenseExchangeRate = parseFloat(expenseCurrency.ask);
        return accum + expenseValue * expenseExchangeRate;
      }, 0).toFixed(2);
    }

    return (
      <header className="wallet-header-container">
        <div data-testid="email-field">{user.email}</div>
        <div data-testid="total-field">{`Total: R$ ${totalExpensesValue}`}</div>
        <div data-testid="header-currency-field">BRL</div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  expenses: state.wallet.expenses,
});

WalletHeader.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.number,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    exchangeRates: PropTypes.objectOf(PropTypes.string),
  })),
}.isRequired;

export default connect(mapStateToProps, null)(WalletHeader);
