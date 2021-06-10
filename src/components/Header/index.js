import React from 'react';
import { arrayOf, func, object } from 'prop-types';
import { connect } from 'react-redux';
// import { Header as header, UserEmail, TotalDebits, Currency } from './style';

export const WalletHeader = ({ userEmail, expenses }) => (
  <header>

    <span data-testid="email-field">
      { userEmail }
    </span>

    <span data-testid="total-field">
      {expenses.reduce((acc, { value }) => acc + Number(value), 0)}
    </span>

    <span data-testid="header-currency-field">
      BRL
    </span>
  </header>
);

WalletHeader.propTypes = {
  userEmail: func,
  expenses: arrayOf(object),
}.isRequired;

const mapStateToProps = ({ user, wallet }) => ({
  userEmail: user.email,
  expenses: wallet.expenses,
});

// const mapDispatchToProps = (dispatch) => ({

// });

export default connect(mapStateToProps)(WalletHeader);
