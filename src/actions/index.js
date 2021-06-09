// Coloque aqui suas actions
import getCurrencies from '../services/api';
import filterCurrencies from '../utils/filterCurrencies';

export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCIES_FAILURE = 'GET_CURRENCIES_FAILURE';

const loginAction = (payload) => ({ type: LOGIN, payload });
export default loginAction;

export const addingExpense = (payload) => ({ type: ADD_EXPENSE, payload });

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
    const request = await getCurrencies();
    const currencyList = filterCurrencies(request);
    dispatch(getCurrenciesSuccess(currencyList));
  } catch (error) {
    dispatch(getCurrenciesFailure(error));
  }
};
