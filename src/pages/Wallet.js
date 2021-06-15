import React from 'react';
import Form from '../componentes/form';
import Header from '../componentes/header';
import Table from '../componentes/table';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Form />
        <Table />
      </>
    );
  }
}

export default Wallet;
