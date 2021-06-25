import React from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';
import Forms from '../components/Wallet/AddNewExpenses/Forms';
import Board from '../components/Wallet/Board';

class Wallet extends React.Component {
  constructor() {
    super();
    this.increaseTotal = this.increaseTotal.bind(this);
  }

  increaseTotal() {
    const { expenses } = this.props;
    return expenses.reduce((acc, { value, currency, exchangeRates }) => {
      acc += value * exchangeRates[currency].ask;
      const result = Math.round(acc * 100) / 100;
      return result;
    }, 0);
  }

  render() {
    const { email } = this.props;
    return (
      <div>

        <header>
          <h2 data-testid="email-field">
            { email }
          </h2>
          <h2 data-testid="total-field">
            {this.increaseTotal()}
          </h2>
          <h2 data-testid="header-currency-field">
            BRL
          </h2>
        </header>
        <Forms />
        <Board />
      </div>
    );
  }
}

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => (
  { email, expenses }
);

Wallet.propTypes = {
  email: string,
}.isRequired;

export default connect(mapStateToProps, null)(Wallet);
