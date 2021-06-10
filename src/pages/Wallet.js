import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import Header from '../components/Header';
import TableWallet from '../components/TableWallet/index';
import ExpenseTrackerForm from '../components/ExpenseTrackerForm/ExpenseTrackerForm';
// import { removeExpenseFromGlobalState } from '../actions';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ExpenseTrackerForm />
        <TableWallet />
      </>
    );
  }
}

export default Wallet;
