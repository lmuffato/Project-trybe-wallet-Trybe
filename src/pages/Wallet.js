import React from 'react';
import Form from '../components/Form';

class Wallet extends React.Component {
  render() {
    return (
      <section>
        <header>
          <div>TrybeWallet</div>
          <h3 data-testid="email-field">Email</h3>
          <h3 data-testid="total-field">Total Despesas</h3>
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
        <Form />
      </section>
    );
  }
}

export default Wallet;
