import React, { Component } from 'react';
import Header from '../components/Wallet/Header';
import Forms from '../components/Wallet/AddNewExpenses/Forms';
import Board from '../components/Wallet/Board';

class Wallet extends Component {
  render() {
    return (
      <>
        <Header />
        <Forms />
        <Board />
      </>
    );
  }
}

export default Wallet;
