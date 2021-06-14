import React from 'react';
import Form from '../components/Form';
import Header from '../components/Header';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Form />
        <ExpensesTable />
      </>
    );
  }
}

export default (Wallet);
