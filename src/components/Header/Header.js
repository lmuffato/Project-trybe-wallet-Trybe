import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const { email } = useSelector((state) => state.user);

  return (
    <div>
      <p data-testid="email-field">{ email }</p>
      <p data-testid="total-field">0</p>
      <p data-testid="header-currency-field">BRL</p>
    </div>
  );
}

export default Header;
