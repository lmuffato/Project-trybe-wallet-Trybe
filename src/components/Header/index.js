import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
// import { Header as header, UserEmail, TotalDebits, Currency } from './style';

export const WalletHeader = ({ userEmail }) => (
  <header>

    <span data-testid="email-field">
      { userEmail }
    </span>

    <span data-testid="total-field">
      0
    </span>

    <span data-testid="header-currency-field">
      BRL
    </span>
  </header>
);

WalletHeader.propTypes = {
  userEmail: func.isRequired,
};

const mapStateToProps = ({ user }) => ({
  userEmail: user.email,
});

// const mapDispatchToProps = (dispatch) => ({

// });

export default connect(mapStateToProps)(WalletHeader);
