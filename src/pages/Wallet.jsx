import React from 'react';
import Header from '../components/Header';
import FormInput from '../components/FormInput';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <div>TrybeWallet</div>
        <Header />
        <FormInput />
      </>
    );
  }
}

export default Wallet;
