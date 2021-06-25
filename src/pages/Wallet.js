import React from 'react';
import WalletHeader from '../components/WalletHeader';
import WalletNewExpense from '../components/WalletNewExpense';
import WalletExpenses from '../components/WalletExpenses';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <WalletHeader />
        <WalletNewExpense />
        <WalletExpenses />
      </div>
    );
  }
}

export default Wallet;
