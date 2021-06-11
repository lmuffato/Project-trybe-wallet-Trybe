import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseTable from '../components/ExpenseTable';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <ExpenseForm />
        <ExpenseTable />
      </main>
    );
  }
}

export default Wallet;
