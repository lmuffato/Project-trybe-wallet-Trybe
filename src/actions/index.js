// Coloque aqui suas actions
import fetchAPI from '../services/FetchAPI';

export const LOGIN = 'LOGIN';

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const ADD_EXPENSE = 'ADD_EXPENSE';

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});

export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';

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

export const getCurrenciesThunk = () => (dispatch) => {
  dispatch(getCurrencies());
  fetchAPI()
    .then((res) => { dispatch(getCurrenciesSuccess(res)); })
    .catch(() => { getCurrenciesError(); });
};
