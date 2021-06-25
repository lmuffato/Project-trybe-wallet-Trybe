import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h2>Wallet</h2>
        <Form />
      </div>);
  }
}

export default Wallet;
