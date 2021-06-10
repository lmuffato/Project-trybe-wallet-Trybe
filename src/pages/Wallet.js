import React from 'react';
import WalletHeader from '../components/WalletHeader';
import AddExpenseForm from '../components/AddExpenseForm';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <WalletHeader />
        <AddExpenseForm />
        <h2>TrybeWallet</h2>
      </>
    );
  }
}

export default Wallet;
