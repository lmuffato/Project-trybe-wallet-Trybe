import React from 'react';
import Header from '../components/Header';
import WalletFrom from '../components/WalletFrom';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <div>TrybeWallet</div>
        <Header />
        <WalletFrom />
      </>
    );
  }
}

export default Wallet;
