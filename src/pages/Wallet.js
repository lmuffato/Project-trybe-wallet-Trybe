import React, { Component } from 'react';
import Header from '../components/Header';
import FormDespesas from '../components/FormDespesas';

class Wallet extends Component {
  render() {
    return (
      <>
        <Header />
        <FormDespesas />
      </>
    );
  }
}

export default Wallet;
