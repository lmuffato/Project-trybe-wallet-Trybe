import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  somarDespesas() {
    const { wallet } = this.props;
    return wallet.expenses.reduce((acc, { value, currency, exchangeRates }) => {
      const coin = exchangeRates[currency].ask;
      acc += coin * value;
      return acc;
    }, 0);
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <h1>Header</h1>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">{ this.somarDespesas().toFixed(2) || 0 }</span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  wallet: state.wallet,
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
