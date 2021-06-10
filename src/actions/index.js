export const LOGIN = 'LOGIN';
export const SEND_CURRENCIES = 'SEND_CURRENCIES';

export const userAction = (email) => ({
  type: LOGIN,
  email,
});

export const sendCurrencies = (currencies) => ({
  type: SEND_CURRENCIES,
  currencies,
});
