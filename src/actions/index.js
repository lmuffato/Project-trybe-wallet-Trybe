export const LOGIN = 'LOGIN';
export const WALLET = 'WALLET';

export const addNewUser = (payload) => ({
  type: LOGIN,
  payload,
});

export const wallet = (payload) => ({
  type: WALLET,
  payload,
});
