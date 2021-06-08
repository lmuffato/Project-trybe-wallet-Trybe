import React from 'react';
import AddDebitForm from '../components/AddDebitForm';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AddDebitForm />
      </div>
    );
  }
}

export default Wallet;
