export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const SAVE_VALUE_EMAIL = 'SAVE_VALUE_EMAIL';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const addExchangeRates = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const saveValueEmail = (email) => ({
  type: SAVE_VALUE_EMAIL,
  email,
});

export const requestCurrencies = (payload) => ({
  type: REQUEST_CURRENCIES,
  payload: Object.keys(payload),
});

const requisitaAPI = async () => {
  const API = await fetch('https://economia.awesomeapi.com.br/json/all');
  const respostaAPI = await API.json();
  delete respostaAPI.USDT;
  return respostaAPI;
};

export const addExpense = (payload) => async (dispatch) => {
  const getCurrencies = await requisitaAPI();
  const myObj = { ...payload, exchangeRates: { ...getCurrencies } };
  dispatch(addExchangeRates(myObj));
};

export const myCurrencies = () => async (dispatch) => {
  const getCurrencies = await requisitaAPI();
  dispatch(requestCurrencies(getCurrencies));
};
