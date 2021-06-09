import React from 'react';
import { useSelector } from 'react-redux';

const Header = ({ total = 0 }) => {
  const email = useSelector((state) => state.user.email);

  return (
    <header className="header">
      <div>Trybe-Wallet</div>
      <div className="email-container">
        <div>
          Email :
          <span data-testid="email-field">{email}</span>
        </div>
        <div>
          Despesa Total: R$
          <span data-testid="total-field">
            {total}
          </span>
        </div>
        <div>
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
