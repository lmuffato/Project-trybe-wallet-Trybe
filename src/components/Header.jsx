import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  totalCalc() {
    const { expenses } = this.props;
    const expVal = expenses.map((expense) => {
      const spendCurrency = expense.currency;
      const currencyRate = expense.exchangeRates[spendCurrency].ask;
      const convertedValue = parseFloat(expense.value) * parseFloat(currencyRate);
      return convertedValue;
    });
    const totalSum = (expVal.reduce((acc, cur) => acc + parseFloat(cur), 0)).toFixed(2);
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
          R$
          {' '}
          {this.totalCalc()}
        </p>
        <h4 data-testid="email-field">{user}</h4>
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
