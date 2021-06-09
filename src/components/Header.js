import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const email = useSelector((state) => state.user.email);
  const total = useSelector((state) => state.wallet.total);
  const [moeda] = React.useState('BRL');

  return (
    <header className="header">
      <div>Trybe-Wallet</div>
      <div className="email-container">
        <div data-testid="email-field">
          Email :
          {' '}
          {email}
        </div>
        <div data-testid="total-field">
          Despesa Total: R$
          {' '}
          {total}
        </div>
        <div data-testid="header-currency-field">
          Moeda:
          {' '}
          {moeda}
        </div>
      </div>
    </header>
  );
};

export default Header;
