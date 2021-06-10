import api from '../services/api';

export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR';
export const API_LOADING = 'API_LOADING';
export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const apiSuccess = (payload) => ({
  type: API_SUCCESS,
  payload,
});
export const apiLoading = () => ({
  type: API_LOADING,
});

export const apiError = (payload) => ({
  type: API_SUCCESS,
  payload,
});

export const coinThunk = () => async (dispatch) => {
  dispatch(apiLoading());
  const res = await api().then();
  const arrayCurrency = Object.entries(res);
  const filterArray = arrayCurrency.filter((currency) => currency[0] !== 'USDT');
  dispatch(apiSuccess(filterArray));
};
