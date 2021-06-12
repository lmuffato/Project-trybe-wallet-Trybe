import React from 'react';
import Header from '../components/Header';
import Inputs from '../components/Inputs';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <h2>TrybeWallet</h2>
        <Header />
        <Inputs />
      </div>
    );
  }
}

export default Wallet;
