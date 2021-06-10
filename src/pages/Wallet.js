import React from 'react';
import Expenses from '../component/Expenses';
import Header from '../component/Header';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Expenses />
      </>
    );
  }
}

export default Wallet;
