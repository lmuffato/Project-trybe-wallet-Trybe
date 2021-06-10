import React from 'react';
import { HeaderWallet, FormExpense, ExpenseTable } from '../components';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <HeaderWallet />
        <FormExpense />
        <ExpenseTable />
      </div>
    );
  }
}

export default Wallet;
