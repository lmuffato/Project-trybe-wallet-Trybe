import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCurrency } from '../actions';

const Wallet = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();

  const globalState = useSelector((state) => state);
  const { user, wallet } = globalState;

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

        <div>
          <input type="number" data-testid="value-input" />
          <input data-testid="description-input" />
          <select data-testid="currency-input">
            {wallet.currencies.map((currency) => (
              <option key={ currency } data-testid={ currency }>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </header>
    </section>
  );
};

export default Wallet;
