import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector((state) => state.user);
  const wallet = useSelector((state) => state.wallet);
  let totalValue = 0;
  wallet.expenses.forEach((expense) => {
    totalValue += Number(expense.exchangeRates[expense.currency].ask * expense.value);
  });
  return (
    <header className="w-100 container mb-3">
      <div className="row">
        <div className="col">
          <span>E-mail: </span>
          <span data-testid="email-field">{user.email}</span>
        </div>
        <div className="col">
          <span>Despesa Total: </span>
          <span data-testid="total-field">{totalValue.toFixed(2)}</span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
