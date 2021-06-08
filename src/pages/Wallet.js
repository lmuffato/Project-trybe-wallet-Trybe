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

        <form>
          <label htmlFor="value">
            Valor
            <input type="number" data-testid="value-input" id="value" />
          </label>

          <label htmlFor="description">
            Descrição
            <input data-testid="description-input" id="description" />
          </label>

          <label htmlFor="coin">
            Moeda
            <select data-testid="currency-input" id="coin">
              {wallet.currencies.map((currency) => (
                <option key={ currency } data-testid={ currency }>
                  {currency}
                </option>
              ))}
            </select>
          </label>
        </form>
      </header>
    </section>
  );
};

export default Wallet;
