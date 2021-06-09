import { getExchange } from '../services/exchangeAPI';

export const GET_LOGIN = 'QUALQUER_COISA1';
export const GET_CURRENCY = 'GET_CURRENCY';

export const user = (payload) => ({
  type: GET_LOGIN,
  payload,
});

export const wallet = (payload) => ({
  type: GET_CURRENCY,
  payload,
});

export const getExchangeThunk = (inputValue) => (dispatch) => {
  // chama a api
  getExchange(inputValue)// deu certo a chamada da api
    .then((res) => {
      dispatch(wallet(res));
    });
};
