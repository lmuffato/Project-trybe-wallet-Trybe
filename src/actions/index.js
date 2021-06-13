// Coloque aqui suas actions
import { getCurrency } from '../services/currencyApi';

export const EMAIL = 'EMAIL';
export const GET_API_CURRENCY_SUCCESS = 'GET_API_CURRENCY_SUCCESS';
export const GET_TO_WALLET = 'GET_TO_WALLET';
export const GET_TOTAL_EXPENSES = 'GET_TOTAL_EXPENSES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const REDUCE_TOTAL = 'REDUCE_TOTAL';

const user = (value) => ({ type: EMAIL, value });
export default user;

export const getApiSuccess = (payload) => ({
  type: GET_API_CURRENCY_SUCCESS,
  payload,
});

export const addToWallet = (payload) => ({
  type: GET_TO_WALLET,
  payload,
});

export const getTotalExpenses = (payload) => ({
  type: GET_TOTAL_EXPENSES,
  payload,
});

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});

export const reduceTotal = (payload) => ({
  type: REDUCE_TOTAL,
  payload,
});

export const getCurrencyThunk = () => (dispatch) => {
  getCurrency()
    .then((currency) => {
      dispatch(getApiSuccess(
        currency,
      ));
    });
};
