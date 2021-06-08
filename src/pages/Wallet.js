import React from 'react';
import Currency from '../components/Currency';
import Description from '../components/Description';
import Header from '../components/Header';
import PaymentMethods from '../components/PaymentMethods';
import Tags from '../components/Tags';
import Value from '../components/Value';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <form>
          <Value />
          <Description />
          <Currency />
          <PaymentMethods />
          <Tags />
        </form>
      </>
    );
  }
}

export default Wallet;
