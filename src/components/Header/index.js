import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { Header, UserEmail, TotalDebits, Currency } from './style';

export const WalletHeader = ({ userEmail }) => (
  <Header>
    <UserEmail
      data-testid="email-field"
    >
      { userEmail }
    </UserEmail>

    <TotalDebits
      data-testid="total-field"
    >
      0
    </TotalDebits>
    <Currency
      data-testid="header-currency-field"
    >
      BRL
    </Currency>
  </Header>
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
