import React from 'react';
import WalletForm from '../components/WalletForm';
import WalletHeader from '../components/WalletHeader';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <WalletHeader />
        <WalletForm />
      </>
    );
  }
}

export default Wallet;
