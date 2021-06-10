import fetchCurrencies from '../services/fetchCurrencies';

export const LOGIN_DATA = 'LOGIN_DATA';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';
export const SET_NEW_EXPENSE = 'SET_NEW_EXPENSE';
export const UPDATE_TOTAL_EXPENSES = 'UPDATE_TOTAL_EXPENSES';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const submitUser = (email, password) => ({
  type: LOGIN_DATA,
  payload: {
    email,
    password,
  },
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

export function getCurrenciesThunk() {
  return async (dispatch) => {
    dispatch(getCurrencies());
    const currencies = await fetchCurrencies();
    dispatch(getCurrenciesSuccess(currencies));
  };
}

export const setNewExpense = (payload) => ({
  type: SET_NEW_EXPENSE,
  payload,
});

export const updateTotalExpenses = (payload) => ({
  type: UPDATE_TOTAL_EXPENSES,
  payload,
});

export const removeExpense = (updatedList, updatedTotal) => ({
  type: REMOVE_EXPENSE,
  payload: {
    updatedList,
    updatedTotal,
  },
});
