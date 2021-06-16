import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';

/* O componente deve se chamar Wallet e estar localizado na pasta src/pages no arquivo Wallet.js */
class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
      </div>);
  }
}

export default Wallet;
