import getAPI from '../services/currenciesAPI';
import { GET_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  GET_EXPENSES,
  GET_EXPENSES_SUCCESS,
  DELETE_EXPENSE } from '.';

export const getCurrenciesAPI = () => ({
  type: GET_CURRENCIES,
});

export const getCurrenciesAPISuccess = (payload) => ({
  type: GET_CURRENCIES_SUCCESS,
  payload,
});

export const getCurrenciesAPI2 = () => ({
  type: GET_EXPENSES,
});

export const getCurrenciesAPISuccess2 = (payload) => ({
  type: GET_EXPENSES_SUCCESS,
  payload,
});

export const getCurrenciesAPIThunk = () => (dispatch) => {
  dispatch(getCurrenciesAPI());
  getAPI()
    .then((response) => {
      const valuesAPI = Object.values(response);
      valuesAPI.splice(1, 1);
      dispatch(getCurrenciesAPISuccess(valuesAPI));
    });
};

export const getCurrenciesAPIThunk2 = (expense) => (dispatch) => {
  dispatch(getCurrenciesAPI2());
  getAPI()
    .then((response) => {
      const expenseInfo = { ...expense, exchangeRates: { ...response } };
      dispatch(getCurrenciesAPISuccess2(expenseInfo));
    });
};

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});
