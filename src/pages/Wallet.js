import React from 'react';
import FormExpenses from '../components/FormExpenses';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <FormExpenses />
      </>
    );
  }
}

export default Wallet;
