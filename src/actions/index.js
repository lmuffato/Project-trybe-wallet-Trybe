// import api from '../service';

export const GET_LOGIN = 'GET_LOGIN';
export const GET_WALLET = 'GET_WALLET';

export const user = (payload) => ({
  type: GET_LOGIN,
  payload,
});

export const wallet = (payload) => ({
  type: GET_WALLET,
  payload,
});
