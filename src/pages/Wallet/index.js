import React from 'react';
import Header from './components/Header';
import ExpensesForm from './components/ExpensesForm';
import ExpensesView from './components/ExpensesView';

function Wallet() {
  return (
    <div className="wallet">
      <Header />
      <ExpensesForm />
      <ExpensesView />
    </div>
  );
}

export default Wallet;
