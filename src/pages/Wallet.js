import React from 'react';
import Header from '../Header';
import Expenses from '../Expenses';
import Table from '../Table';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Expenses />
        <Table />
      </div>
    );
  }
}

export default Wallet;
