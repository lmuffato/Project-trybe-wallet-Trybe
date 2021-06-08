import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCurrency } from '../actions';
import FormWallet from '../components/FormWallet';

const Wallet = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();

  const globalState = useSelector((state) => state);
  const { user } = globalState;

  useEffect(() => {
    dispatch(fetchCurrency());
  }, []);

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
    </section>
  );
};

export default Wallet;
