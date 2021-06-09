import React from 'react';
import Header from '../components/Header';
import ExpensesForm from '../components/ExpensesForm';
import ExpensesList from '../components/ExpensesList';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ExpensesForm />
        <ExpensesList />
      </>
    );
  }
}

export default Wallet;
