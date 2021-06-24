import React from 'react';
import ExpenseTable from '../components/ExpenseTable';
import Form from '../components/Form';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <section className="wallet-container">
        <Header />
        <Form />
        <ExpenseTable />
      </section>
    );
  }
}

export default Wallet;
