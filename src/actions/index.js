// Coloque aqui suas actions
import axios from 'axios';

export const ADD_EMAIL = 'ADD_EMAIL';
export const GET_CURRENCY = 'GET_CURRENCY';
export const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';
export const GET_CURRENCY_ERROR = 'GET_CURRENCY_ERROR';

export function addEmail(email) {
  return {
    type: ADD_EMAIL,
    payload: email,
  };
}

export function getCurrency() {
  return {
    type: GET_CURRENCY,
  };
}

export function getCurrencySuccess(payload) {
  return {
    type: GET_CURRENCY_SUCCESS,
    payload,
  };
}

export function getCurrencyError(payload) {
  return {
    type: GET_CURRENCY_ERROR,
    payload,
  };
}

export const getCurrencyThunk = () => async (dispatch) => {
  dispatch(getCurrency());

  try {
    const response = await axios.get('https://economia.awesomeapi.com.br/json/all');

    const currency = Object.keys(response.data);
    const filteredCurrency = currency.filter((item) => item !== 'USDT');

    dispatch(getCurrencySuccess(filteredCurrency));
  } catch (error) {
    dispatch(getCurrencyError(error));
  }
};
