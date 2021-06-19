import React from 'react';
import Header from '../components/Header';
import Expenses from '../components/Expenses';
import Description from '../components/Description';
import Currency from '../components/Currency';
import PaymentMethod from '../components/PaymentMethod';
import Tags from '../components/Tags';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <form>
          <Expenses />
          <Description />
          <Currency />
          <PaymentMethod />
          <Tags />
        </form>
      </div>
    );
  }
}

export default Wallet;
