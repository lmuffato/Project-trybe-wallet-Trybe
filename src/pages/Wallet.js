import React from 'react';
import Form from '../componentes/form';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <header>
          <p data-testid="email-field">{}</p>
          <p data-testid="total-field">
            0
            {' '}
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <Form />
      </div>
    );
  }
}

export default Wallet;
