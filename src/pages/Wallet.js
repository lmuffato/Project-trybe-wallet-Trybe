import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import FormWallet from '../components/FormWallet';
import Table from '../components/Table';

const Wallet = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const globalState = useSelector((state) => state);
  const { user, wallet } = globalState;

  const getTotalPrice = () => {
    const totalPriceRedux = wallet.expenses.reduce((acc, expense) => {
      const { value, currency, exchangeRates } = expense;
      const { ask } = exchangeRates[currency];
      const total = acc + (ask * value);
      return total;
    }, 0);

    setTotalPrice(totalPriceRedux);
  };

  useEffect(() => {
    getTotalPrice();
  }, [wallet]);

  return (
    <section>
      <header>
        <div>
          <p data-testid="email-field">{user.email}</p>
          <p data-testid="total-field">{totalPrice}</p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>
      <FormWallet />
      <Table />
    </section>
  );
};

export default Wallet;
