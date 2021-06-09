import React from 'react';
import Header from '../components/Header';
import FormAddDespesas from '../components/FormAddDespesas';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormAddDespesas />
      </div>
    );
  }
}

export default Wallet;
