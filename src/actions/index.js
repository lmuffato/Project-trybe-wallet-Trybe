import fetchCurrencies from '../services/currenciesApi';

export const LOGIN_USER = 'LOGIN_USER';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REQUEST_CURRENCY = 'GET_CURRENCY';
export const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';
// export const GET_CURRENCY_ERROR = 'GET_CURRENCY_ERROR';

export const logInUser = (email) => ({
  type: LOGIN_USER,
  payload: email,
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense,
});

export const requestCurrency = () => ({
  type: REQUEST_CURRENCY,
});

export const getCurrencySuccess = (currencies) => ({
  type: GET_CURRENCY_SUCCESS,
  payload: currencies,
});

/* export const getCurrencyError = (error) => ({
  type: GET_CURRENCY_ERROR,
  payload: error,
}); */

export const getCurrencies = () => (dispatch) => {
  dispatch(requestCurrency());
  fetchCurrencies()
    .then((currencies) => dispatch(getCurrencySuccess(Object.keys(currencies))));

  // .catch((error) => dispatch(getCurrencyError(error)));
};
