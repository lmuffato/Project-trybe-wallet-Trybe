import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <p>Aqui é o corpo da carteira</p>
        <Form />
      </div>
    );
  }
}

export default Wallet;
