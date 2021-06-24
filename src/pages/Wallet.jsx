import React from 'react';
import Header from '../components/Header';
import FormInput from '../components/FormInput';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <FormInput />
        <Table />
      </>
    );
  }
}

export default Wallet;
