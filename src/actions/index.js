import { getExchange } from '../services/exchangeAPI';

export const GET_LOGIN = 'QUALQUER_COISA1';
export const GET_CURRENCY = 'GET_CURRENCY';
export const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';
export const GET_CURRENCY_ERROR = 'GET_CURRENCY_ERROR';

export const user = (payload) => ({
  type: GET_LOGIN,
  payload,
});

export const wallet = () => ({
  type: GET_CURRENCY,
});

export const getExchangeSuccess = (payload) => ({
  type: GET_CURRENCY_SUCCESS,
  payload,
});

export const getExchangeError = (payload) => ({
  type: GET_CURRENCY_ERROR,
  payload,
});

export const getExchangeThunk = () => (dispatch) => {
  // is loading true
  dispatch(wallet());

  // chama a api
  getExchange()// deu certo a chamada da api
    .then((res) => {
      const {
        USD, CAD, EUR, GBP, ARS, BTC, LTC, JPY, CHF, AUD, CNY, ILS, ETH, XRP,
      } = res;
      dispatch(getExchangeSuccess({
        currencies: [
          USD, CAD, EUR, GBP, ARS, BTC, LTC, JPY, CHF, AUD, CNY, ILS, ETH, XRP,
        ],
      }));
    });
};
