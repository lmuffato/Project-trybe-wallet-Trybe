import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const { email } = useSelector((state) => state.user);
  const value = useSelector((state) => state.wallet.expenses);

  return (
    <div>
      <p data-testid="email-field">{ email }</p>
      <p data-testid="total-field">
        {
          value.length <= 0
            ? 0
            : value.reduce(
              (acc, expense) => (
                acc + (parseInt(expense.value, 10)
                * expense.exchangeRates[expense.currency].ask)), 0,
            )
        }
      </p>
      <p data-testid="header-currency-field">BRL</p>
    </div>
  );
}

export default Header;
