import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class WalletHeader extends Component {
  render() {
    const { email, total, currency } = this.props;
    return (
      <header className="header-container">
        <div className="wallet-logo">CARTEIRA DO MINEIRO</div>
        <div className="user-summary">
          <span className="user-email" data-testid="email-field">
            {email || 'alguem@email.com'}
          </span>
          <span data-testid="total-field">
            {`Total gasto: RS ${total.toFixed(2)}`}
          </span>
          <span data-testid="header-currency-field">{currency}</span>
        </div>
      </header>
    );
  }
}

WalletHeader.propTypes = {
  email: PropTypes.string,
  total: PropTypes.number,
  currency: PropTypes.string,
}.isRequired;
