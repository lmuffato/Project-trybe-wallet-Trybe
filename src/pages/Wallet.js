import React from 'react';
import Header from '../components/Header/index';
import Form from '../components/Form/index';
import ExpensesCard from '../components/ExpensesCard/index';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Form />
        <ExpensesCard />
      </>
    );
  }
}

export default Wallet;
