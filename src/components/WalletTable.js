import React, { Component } from 'react';
import WalletTableHeader from './WalletTable/WalletTableHeader';
import WalletTableBody from './WalletTable/WalletTableBody';

class WalletTable extends Component {
  render() {
    return (
      <table>
        <WalletTableHeader />
        <WalletTableBody />
      </table>
    );
  }
}

export default WalletTable;
