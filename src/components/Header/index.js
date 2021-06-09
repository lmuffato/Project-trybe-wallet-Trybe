import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, selectedExchange, total } = this.props;
    return (
      <div>
        <span data-testid="email-field">
          { email }
        </span>
        <span data-testid="total-field">
          { total }
        </span>
        <span data-testid="header-currency-field">
          { selectedExchange }
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  selectedExchange: state.wallet.selectedExchange,
  expenses: state.wallet.expenses,
  total: state.wallet.expenses.reduce(
    (acc, cur) => parseFloat(cur.value * cur.exchangeRates[cur.currency].ask) + acc, 0,
  ),
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  selectedExchange: PropTypes.string,
  total: PropTypes.number,
};

Header.defaultProps = {
  selectedExchange: 'BRL',
  total: 0,
};

export default connect(mapStateToProps)(Header);
