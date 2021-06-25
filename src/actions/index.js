export const LOGIN = 'LOGIN';
export const WALLET = 'WALLET';
export const CURRENCIES = 'CURRENCIES';
export const DELETING = 'DELETING';

export const addNewUser = (payload) => ({
  type: LOGIN,
  payload,
});

export const wallet = (payload) => ({
  type: WALLET,
  payload,
});

export const currencies = (payload) => ({
  type: CURRENCIES,
  payload,
});

export const deleting = (payload) => ({
  type: DELETING,
  payload,
});
