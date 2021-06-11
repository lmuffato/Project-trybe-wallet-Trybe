// Coloque aqui suas actions
import { getCurrency } from '../services/currencyApi';

export const EMAIL = 'EMAIL';
export const GET_API_CURRENCY_SUCCESS = 'GET_API_CURRENCY_SUCCESS';
export const GET_TO_WALLET = 'GET_TO_WALLET';
export const GET_TOTAL_EXPENSES = 'GET_TOTAL_EXPENSES';

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

export const getCurrencyThunk = () => (dispatch) => {
  getCurrency()
    .then((currency) => {
      dispatch(getApiSuccess(
        currency,
      ));
    });
};
