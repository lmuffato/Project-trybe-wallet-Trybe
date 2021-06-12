import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const [totalExpenses, setTotalExpenses] = useState(0);
  const globalState = useSelector((state) => state);

  const { user: { email }, wallet } = globalState;

  const sumExpenses = ({ expenses }) => {
    if (expenses.length === 0) {
      return 0;
    }
    return expenses.reduce((acc, expense) => {
      const { currency, exchangeRates, value } = expense;
      const { ask } = exchangeRates[currency];
      return acc + (+value) * ask;
    }, 0);
  };

  useEffect(() => {
    const total = sumExpenses(wallet).toFixed(2);
    setTotalExpenses(total);
  }, [wallet]);

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
            {email}
            {' '}
          </span>
        </p>
        <p>
          Despesa Total:
          <span data-testid="total-field">{totalExpenses}</span>
        </p>
        <p>
          <span data-testid="header-currency-field">BRL</span>
        </p>
      </div>
    </header>
  );
}

export default Header;
