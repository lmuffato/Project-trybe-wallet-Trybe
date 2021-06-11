import React from 'react';
import Header from '../components/Header';
import Forms from '../components/Forms';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Forms />
        <Table />
      </>
    );
  }
}

export default Wallet;
