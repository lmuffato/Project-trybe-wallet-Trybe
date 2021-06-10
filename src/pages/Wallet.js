import React from 'react';
import Header from '../components/Header';
import TableWallet from '../components/TableWallet/index';
import ExpenseTrackerForm from '../components/ExpenseTrackerForm/ExpenseTrackerForm';

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
