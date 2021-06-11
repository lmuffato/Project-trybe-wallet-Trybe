import React from 'react';
import Expenses from '../components/Expenses';
import Header from '../components/Header';
import ExpensesForm from '../components/ExpensesForm';

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
