import React from 'react';
import Header from '../components/Header';
import WalletFrom from '../components/WalletFrom';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <div>TrybeWallet</div>
        <Header />
        <WalletFrom />
        <Table />
      </>
    );
  }
}

export default Wallet;
