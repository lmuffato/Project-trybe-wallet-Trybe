import { getCurrenciesAPI } from '../services/currenciesAPI';

export const LOGIN = 'LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const UPDATE_TOTAL = 'UPDATE_TOTAL';

export const userAction = (email) => ({
  type: LOGIN,
  email,
});

export const getCurrencies = () => ({
  type: GET_CURRENCIES,
});

export const getCurrenciesSuccess = (payload) => ({
  type: GET_CURRENCIES_SUCCESS,
  payload,
});

export const getCurrenciesError = (payload) => ({
  type: GET_CURRENCIES_ERROR,
  payload,
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  expense,
});

export const removeExpense = (id) => ({
  type: REMOVE_EXPENSE,
  id,
});

export const updateTotal = (value) => ({
  type: UPDATE_TOTAL,
  value,
});

export const getCurrenciesThunk = () => (dispatch) => {
  dispatch(getCurrencies());

  getCurrenciesAPI()
    .then((res) => (dispatch(getCurrenciesSuccess(res))))
    .catch(() => { getCurrenciesError(); });
};
