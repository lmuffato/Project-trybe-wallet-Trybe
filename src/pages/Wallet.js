import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';
import './wallet.css';

class Wallet extends React.Component {
  handleValue() {
    const { expenses } = this.props;
    const allValues = expenses.map((expense) => {
      const coin = expense.currency;
      const rate = expense.exchangeRates[coin].ask;
      const myValue = parseFloat(expense.value) * parseFloat(rate);
      return myValue;
    });
    const valuesSum = allValues.reduce(((acc, cur) => acc + parseFloat(cur)), 0);
    return valuesSum;
  }

  render() {
    const { userEmail } = this.props;
    const total = this.handleValue();
    return (
      <>
        <header className="wallet-header">
          <h1>My Wallet</h1>
          <p>
            Email:
            <span data-testid="email-field">
              {userEmail}
            </span>
          </p>
          <p>
            Total:
            <span data-testid="total-field">
              {total}
            </span>
            <span data-testid="header-currency-field">
              BRL
            </span>
          </p>
        </header>
        <Form />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  userEmail: state.user.email });

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
