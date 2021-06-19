import React, { Component } from 'react';
import WalletTableHeader from './WalletTable/WalletTableHeader';
import WalletTableBody from './WalletTable/WalletTableBody';
import '../style/WalletTable.css';

class WalletTable extends Component {
  render() {
    return (
      <table className="wallet-table-container">
        <WalletTableHeader />
        <WalletTableBody />
      </table>
    );
  }
}

export default WalletTable;
