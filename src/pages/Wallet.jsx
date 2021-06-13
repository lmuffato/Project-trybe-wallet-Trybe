import React, { Component } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import Header from '../components/Header';
import TableWallet from '../components/TableWallet';

export default class Wallet extends Component {
  render() {
    return (
      <div>
        <Header />
        <ExpenseForm />
        <TableWallet />
      </div>
    );
  }
}
