import React from 'react';
import AddExpense from '../components/AddExpense';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <AddExpense />
        <div>Wallet</div>
      </>
    );
  }
}

export default Wallet;
