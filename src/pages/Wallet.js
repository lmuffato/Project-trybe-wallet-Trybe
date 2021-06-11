import React from 'react';
import ExpensesAddForm from './components/ExpensesAddForm';
import WalletHeader from './components/WalletHeader';
import WalletTable from './components/WalletTable';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <WalletHeader />
        <ExpensesAddForm />
        <WalletTable />
      </div>
    );
  }
}

export default Wallet;
