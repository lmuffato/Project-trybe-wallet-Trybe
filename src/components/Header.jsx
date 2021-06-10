import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { getEmail, getExpenses } = this.props;
    console.log(getExpenses);
    return (
      <header>
        <span data-testid="email-field">{getEmail}</span>
        <span data-testid="total-field">
          {
            getExpenses.reduce((acc, { value, exchangeRates, currency }) => {
              const result = exchangeRates[currency].ask;
              return acc + result * value;
            }, 0).toFixed(2)
          }
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  getExpenses: state.wallet.expenses,
});

Header.propTypes = {
  getEmail: PropTypes.string.isRequired,
  getExpenses: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
