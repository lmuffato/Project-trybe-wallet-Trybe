import React from 'react';
import WalletHeader from '../components/WalletHeader';
import WalletExpenses from '../components/WalletExpenses';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <WalletHeader />
        <WalletExpenses />
      </div>
    );
  }
}

export default Wallet;
