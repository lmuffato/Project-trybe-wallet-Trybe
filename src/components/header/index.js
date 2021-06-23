import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { user, expenses } = this.props;

    return (
      <header>
        <span>Email: </span>
        <span
          data-testid="email-field"
        >
          { user.email }
        </span>
        <span>Despesa Total: </span>
        <span
          data-testid="total-field"
        >
          { expenses.length }
        </span>
        <span
          data-testid="header-currency-field"
        >
          BRL
        </span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: {
    email: state.user.email,
  },
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
}.isRequired;

export default connect(mapStateToProps, null)(Header);
