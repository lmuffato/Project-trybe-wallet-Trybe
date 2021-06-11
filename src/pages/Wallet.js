import React from 'react';
import Header from '../components/Header';
import ExpensesForm from '../components/ExpensesForm';
import Expenses from '../components/Expenses';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Expenses />
        <ExpensesForm />
      </div>
    );
  }
}

export default Wallet;
