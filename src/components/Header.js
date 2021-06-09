import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const userEmail = useSelector(({ user: { email } }) => email);
  console.log(userEmail);
  return (
    <header>
      <div>
        <img src="https://uploads-ssl.webflow.com/5fba98ad987231cf0efa3d58/5fba9c9a93a2e77624258d49_Logo.svg" alt="logo Trybe" />
      </div>
      <div>
        <p>
          Email:
          <span data-testid="email-field">
            {' '}
            {userEmail}
            {' '}
          </span>
        </p>
        <p>
          Despesa Total:
          <span data-testid="total-field">0</span>
        </p>
        <p>
          <span data-testid="header-currency-field">BRL</span>
        </p>
      </div>
    </header>
  );
}

export default Header;
