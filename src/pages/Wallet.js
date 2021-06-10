import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Form from '../components/Form';
import Table from '../components/Table';

const Wallet = () => {
  const [totalPriceState, setTotalPriceState] = useState(0);

  const expenses = useSelector((state) => state.wallet.expenses);
  const email = useSelector((state) => state.user.email);

  useEffect(() => {
    const totalPrice = () => {
      const totalPriceRedux = expenses.reduce((acc, expense) => {
        const { value, currency, exchangeRates } = expense;
        const { ask } = exchangeRates[currency];
        const total = acc + (ask * value);
        return total;
      }, 0);

      setTotalPriceState(totalPriceRedux);
    };
    totalPrice();
  }, [expenses]);

  return (
    <section>
      <header>
        <div>
          <p data-testid="email-field">{email}</p>
          <p data-testid="total-field">{totalPriceState}</p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>
      <Form />
      <Table />
    </section>
  );
};

export default Wallet;
