import React, { Component } from 'react';
import Header from '../components/Wallet/Header';
import Forms from '../components/Wallet/NewExpense/Forms';
import Table from '../components/Wallet/Table';

class Wallet extends Component {
  render() {
    return (
      <>
        <Header />
        <Forms />
        <Table />
      </>
    );
  }
}

export default Wallet;
