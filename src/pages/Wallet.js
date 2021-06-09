import React from 'react';
import ExpensesAddForm from './components/ExpensesAddForm';
import WalletHeader from './components/WalletHeader';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <WalletHeader />
        <ExpensesAddForm />
      </div>
    );
  }
}

export default Wallet;
