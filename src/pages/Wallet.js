import React from 'react';
import Header from '../components/Header';
import FormAddDespesas from '../components/FormAddDespesas';
import TabelaGastos from '../components/TabelaGastos';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormAddDespesas />
        <TabelaGastos />
      </div>
    );
  }
}

export default Wallet;
