// Coloque aqui suas actions
import { currenciesFetch, responseWithoutUSDT } from '../services/fetchApi';

export const LOGIN = 'LOGIN';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';

export const signIn = (payload) => ({
  type: LOGIN,
  payload,
});

export const requestingCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const addCurrencies = (payload) => ({
  type: ADD_CURRENCIES,
  payload,
});

export const getCoinsThunk = () => async (dispatch) => {
  const response = await currenciesFetch();
  const filteredCurrencies = responseWithoutUSDT(response);
  dispatch(addCurrencies(filteredCurrencies));
};
