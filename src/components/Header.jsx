import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, totalValue } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          Email:
          {(email)}
        </p>
        <p data-testid="total-field">
          Total:
          {totalValue.toFixed(2)}
        </p>
        <p data-testid="header-currency-field">
          Taxa:BRL
        </p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalEx: state.wallet.expenses,
  totalValue: state.wallet.total,
});

Header.propTypes = {
  email: PropTypes.string,
  totalEx: PropTypes.array,

}.isRequired;
export default connect(mapStateToProps)(Header);
