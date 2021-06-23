import React from 'react';
import HeaderWallet from '../components/HeaderWallet';
import TableWallet from '../components/TableWallet';
import AllInputsToAddExpense from '../components/AllInputsToAddExpense';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <h1>TrybeWallet</h1>
        <header>
          <HeaderWallet />
          <AllInputsToAddExpense />
          <TableWallet />
        </header>
      </div>
    );
  }
}

export default Wallet;
