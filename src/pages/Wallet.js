import React from 'react';
import WalletForm from '../components/WalletForm';
import WalletHeader from '../components/WalletHeader';
import WalletTable from '../components/WalletTable';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <WalletHeader />
        <WalletForm />
        <WalletTable />
      </>
    );
  }
}

export default Wallet;
