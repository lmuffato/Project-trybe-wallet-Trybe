import React from 'react';
import Header from '../components/Header';
import Forms from '../components/Forms';
import TableExpense from '../components/TableExpense';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Forms />
        <TableExpense />
      </>
    );
  }
}

export default Wallet;
