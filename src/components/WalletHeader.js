import React, { Component } from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';
import './WalletHeader.css';

class WalletHeader extends Component {
  render() {
    const { email, totalExpenses } = this.props;
    return (
      <header className="wallet-header">
        <div className="total-field">
          <span data-testid="total-field">
            Despesas Totais:
            { !totalExpenses ? '0.00' : totalExpenses.toFixed(2) }
          </span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
        <div className="project-name">
          <span>Trybe Wallet Project</span>
        </div>
        <div>
          <span className="logged-email" data-testid="email-field">{ email }</span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalExpenses: state.wallet.totalExpenses,
});

WalletHeader.propTypes = {
  email: string,
}.isRequired;

export default connect(mapStateToProps)(WalletHeader);
