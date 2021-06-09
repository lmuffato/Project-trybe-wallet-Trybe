import { getExchange } from '../services/exchangeAPI';

export const GET_LOGIN = 'QUALQUER_COISA1';
export const QUALQUER_COISA2 = 'QUALQUER_COISA1';

export const user = (payload) => ({
  type: GET_LOGIN,
  payload,
});

export const wallet = (payload) => ({
  type: QUALQUER_COISA2,
  payload,
});

export const getExchangeThunk = (inputValue) => (dispatch) => {
  // chama a api
  getExchange(inputValue)// deu certo a chamada da api
    .then((res) => {
      dispatch(wallet(res));
    });
};
