import React from 'react';
// import { Redirect } from 'react-router';

import WalletHeader from '../components/WalletHeader';
import WalletForm from '../components/WalletForm';
import WalletTable from '../components/WalletTable';

class Wallet extends React.Component {
  render() {
    // if (!isLoggedIn) {
    //   return <Redirect to="/" />;
    // }

    return (
      <section className="wallet-page">
        <WalletHeader />
        <WalletForm />
        <WalletTable />
      </section>
    );
  }
}

export default Wallet;
