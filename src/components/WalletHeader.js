import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletHeader extends Component {
  render() {
    const { email, total } = this.props;
    return (
      <header className="header-container">
        <div className="wallet-logo">MEU BOLSO</div>
        <div className="user-summary">
          <span className="user-email" data-testid="email-field">
            {email || 'alguem@email.com'}
          </span>
          <span data-testid="total-field">
            {`Total gasto: RS ${total.toFixed(2)}`}
          </span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
  total: state.wallet.expenses.reduce(
    (a, b) => a + b.value * b.exchangeRates[b.currency].ask,
    0,
  ),
});

WalletHeader.propTypes = {
  email: PropTypes.string,
  total: PropTypes.number,
  currency: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(WalletHeader);
