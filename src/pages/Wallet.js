import React from 'react';
import FormExpenses from '../components/FormExpenses';
import Header from '../components/Header';
import TableExpenses from '../components/TableExpenses';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <FormExpenses />
        <TableExpenses />
      </>
    );
  }
}

export default Wallet;
