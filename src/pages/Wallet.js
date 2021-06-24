import React from 'react';
import Form from '../components/Form';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <div>
          <Form />
        </div>
      </>
    );
  }
}

export default Wallet;
