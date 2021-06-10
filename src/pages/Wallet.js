import React from 'react';
import Header from '../components/Header';
import TableWallet from '../components/TableWallet/index';
import ExpenseTrackerForm from '../components/ExpenseTrackerForm/ExpenseTrackerForm';
import { EditExpense } from '../components/EditExpense';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      isEdit: false,
    };
  }

  render() {
    const { isEdit } = this.state;

    return (
      <>
        <Header />
        { isEdit ? <EditExpense /> : <ExpenseTrackerForm /> }
        <TableWallet />
      </>
    );
  }
}

export default Wallet;
