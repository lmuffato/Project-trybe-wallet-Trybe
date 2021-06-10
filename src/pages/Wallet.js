import React from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Form />
      </>
    );
  }
}

export default connect()(Wallet);
