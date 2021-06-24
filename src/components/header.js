import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { saveEmail, expenses } = this.props;
    const totalSum = expenses.reduce((acc, curr) => {
      const { value, exchangeRates, currency } = curr;
      const { ask } = Object.values(exchangeRates)
        .find(({ code }) => code === currency);
      const result = value * ask;
      return acc + result;
    }, 0);
    return (
      <div>
        <header>
          <h3 data-testid="email-field">
            { saveEmail }
          </h3>
        </header>

        <span data-testid="total-field">
          { totalSum }
        </span>
        <span data-testid="header-currency-field">
          BRL
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  saveEmail: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
