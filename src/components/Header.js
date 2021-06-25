import React from 'react';

class Header extends React.Component {
  render() {
    const email = 'Silva Lenilsom';
    const total = 100;
    return (
      <header>
        <span>Email: </span>
        <span data-testid="email-field">{email}</span>
        <span>Total: </span>
        <span data-testid="total-field">{total}</span>
        <span>Moeda: </span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

export default Header;
