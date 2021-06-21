export const LOGIN = 'LOGIN';
export const WALLET = 'WALLET';

export const addNewUser = (email) => ({
  type: LOGIN,
  payload: {
    email,
  },
});

export const wallet = (currencies, expenses) => ({
  type: WALLET,
  payload: {
    currencies,
    expenses,
  },
});
