import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector((state) => state.user);

  return (
    <section>
      <div>
        <span data-testid="email-field">{user.email}</span>
        <div>
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </div>
    </section>
  );
};

export default Header;
