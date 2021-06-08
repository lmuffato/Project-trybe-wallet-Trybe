import React from 'react';

class Wallet extends React.Component {
  render() {
    return (
      <header>
        <p data-testid="email-field">Email:</p>
        <p data-testid="total-field">Despesa Total:</p>
        <p data-testid="header-currency-field">Câmbio:</p>
      </header>
    );
  }
}

export default Wallet;
