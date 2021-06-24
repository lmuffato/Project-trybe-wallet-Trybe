import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  totalCalc() {
    const { expenses } = this.props;
    const expenseV = expenses.map((expense) => {
      const spendCurrency = expense.currency;
      const currencyRate = expense.exchangeRates[spendCurrency].ask;
      const convertedValue = parseFloat(expense.value) * parseFloat(currencyRate);
      return convertedValue;
    });
    const totalSum = (expenseV.reduce((acc, cur) => acc + parseFloat(cur), 0)).toFixed(2);
    return totalSum;
  }

  render() {
    const { user } = this.props;
    return (
      <header className="wallet-header">
        <h6 data-testid="email-field">{user}</h6>
        <p data-testid="header-currency-field">Câmbio: BRL</p>
        <p data-testid="total-field">
          Valor Total:
          {' '}
          {this.totalCalc()}
          ;
        </p>
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
  expenses: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, null)(Header);
