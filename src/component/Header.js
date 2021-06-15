import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { emailState, valueExpenseState = 0 } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          Email:
          { emailState }
        </p>
        <p data-testid="total-field">
          Despesa total:
          { valueExpenseState }
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  emailState: PropTypes.string.isRequired,
  valueExpenseState: PropTypes.number.isRequired,
};

const mapStateProps = (state) => ({
  emailState: state.user.email,
  valueExpenseState: state.wallet.expenses.value,
});

export default connect(mapStateProps, null)(Header);
