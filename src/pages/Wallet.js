import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/walletForm';
import WalletTable from '../components/WalletTable';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <h1>The Wallet</h1>
        <Header />
        <WalletForm />
        <WalletTable />
      </div>
    );
  }
}

export default Wallet;
