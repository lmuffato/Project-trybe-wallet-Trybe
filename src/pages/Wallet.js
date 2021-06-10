import React from 'react';
import './Wallet.css';
import Header from '../components/Header';
import Form from '../components/Form';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <>
        <Header />
        <Form />
      </>
    );
  }
}

export default Wallet;
