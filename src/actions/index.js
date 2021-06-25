import { fetchByCurrency } from '../services/api/servicesApi';

const LOGIN_ACTION = 'LOGIN_ACTION';
const ADD_EXPENSE = 'ADD_EXPENSE';
// const ADD_AMOUNT = 'ADD_AMOUNT';
const GET_CURRENCIES = 'GET_CURRENCIES';
const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
const GET_CURRENCIES_FAILURE = 'GET_CURRENCIES_FAILURE';

const loginAction = (payload) => ({ type: LOGIN_ACTION, payload });
export default loginAction;

export const addExpense = (payload) => ({ type: ADD_EXPENSE, payload });

export const getCurrenciesTry = () => ({
  type: GET_CURRENCIES,
});

export const getCurrenciesSuccess = (payload) => ({
  type: GET_CURRENCIES_SUCCESS,
  payload,
});

export const getCurrenciesFailure = (error) => ({
  type: GET_CURRENCIES_FAILURE,
  error,
});

export const getCurrenciesThunk = () => async (dispatch) => {
  dispatch(getCurrenciesTry());
  try {
    const request = await fetchByCurrency();
    dispatch(getCurrenciesSuccess(request));
  } catch (error) {
    dispatch(getCurrenciesFailure(error));
  }
};
