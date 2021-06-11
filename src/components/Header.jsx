import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  totalCalc() {
    const { expenses } = this.props;
    const expenseValues = expenses.map((expense) => {
      const spendCurrency = expense.currency;
      const currencyRate = expense.exchangeRates[spendCurrency].ask;
      const convertedValue = parseFloat(expense.value) * parseFloat(currencyRate);
      return convertedValue;
    });
    const totalSum = expenseValues.reduce((acc, cur) => acc + parseFloat(cur), 0);
    return totalSum;
  }

  render() {
    const { user } = this.props;
    return (
      <header className="wallet-header">
        <p data-testid="header-currency-field">
          <b>Câmbio:</b>
          {' '}
          BRL
        </p>
        <p data-testid="total-field">
          <b>Valor Total:</b>
          {' '}
          {this.totalCalc()}
        </p>
        <h6 data-testid="email-field">{user}</h6>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  user: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Header);
