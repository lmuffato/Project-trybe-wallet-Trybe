// Coloque aqui suas actions
import { currenciesAPI } from '../services/currenciesAPI';

export const LOGIN = 'LOGIN';
export const GET_CURRENCY = 'GET_CURRENCY';
export const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';
export const GET_CURRENCY_ERROR = 'GET_CURRENCY_ERROR';

export const userData = (email, password) => ({
  type: LOGIN,
  payload: {
    email,
    password,
  },
});

export const getCurrency = () => ({
  type: GET_CURRENCY,
});

export const getCurrencySuccess = (payload) => ({
  type: GET_CURRENCY_SUCCESS,
  payload,
});

export const getCurrencyError = (payload) => ({
  type: GET_CURRENCY_ERROR,
  payload,
});

export function getCurrencyThunk() {
  return async (dispatch) => {
    dispatch(getCurrency());
    const currencies = await currenciesAPI();
    dispatch(getCurrencySuccess(currencies));
  };
}
