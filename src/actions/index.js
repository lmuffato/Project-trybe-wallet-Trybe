// Coloque aqui suas actions
import getCurrencies from '../services/api';
import filterCurrencies from '../utils/filterCurrencies';

export const LOGIN = 'LOGIN';
export const ADD_AMOUNT = 'ADD_AMOUNT';
export const ADD_DESCRIPTION = 'ADD_DESCRIPTION';
export const ADD_CURRENCY_TYPE = 'ADD_CURRENCY_TYPE';
export const PAYMENT_METHOD = 'PAYMENT_METHOD';
export const ADD_TAG = 'ADD_TAG';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCIES_FAILURE = 'GET_CURRENCIES_FAILURE';
export const GET_EXCHANGE_RATES = 'GET_EXCHANGE_RATES';
export const GET_EXCHANGE_RATES_SUCCESS = 'GET_EXCHANGE_RATES_SUCCESS';
export const GET_EXCHANGE_RATES_ERROR = 'GET_EXCHANGE_RATES_ERROR';

const loginAction = (payload) => ({ type: LOGIN, payload });
export default loginAction;

export const addingExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const addAmount = (payload) => ({
  type: ADD_AMOUNT,
  payload,
});

export const addDescription = (payload) => ({
  type: ADD_DESCRIPTION,
  payload,
});

export const addCurrencyType = (payload) => ({
  type: ADD_CURRENCY_TYPE,
  payload,
});

export const addPaymentMethod = (payload) => ({
  type: PAYMENT_METHOD,
  payload,
});

export const addTag = (payload) => ({
  type: ADD_TAG,
  payload,
});

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

export const getExchangeRatesTry = () => ({
  type: GET_EXCHANGE_RATES,
});

export const getExchangeRatesSuccess = (payload) => ({
  type: GET_EXCHANGE_RATES_SUCCESS,
  payload,
});

export const getExchangeRatesError = (error) => ({
  type: GET_EXCHANGE_RATES_ERROR,
  error,
});

export const getCurrenciesThunk = () => async (dispatch) => {
  dispatch(getCurrenciesTry());
  try {
    const request = await getCurrencies();
    console.log(request);
    const currencyList = filterCurrencies(request);
    dispatch(getCurrenciesSuccess(currencyList));
  } catch (error) {
    dispatch(getCurrenciesFailure(error));
  }
};

export const getCurrenciesThunkTest = () => async (dispatch) => {
  dispatch(getCurrenciesTry());
  try {
    const request = await getCurrencies();
    console.log(request);
    // const currencyList = filterCurrencies(request);
    dispatch(getCurrenciesSuccess(request));
  } catch (error) {
    dispatch(getCurrenciesFailure(error));
  }
};

export const getExchangeRatesThunk = () => async (dispatch) => {
  dispatch(getExchangeRatesTry());
  try {
    const request = await getCurrencies();
    dispatch(getExchangeRatesSuccess(request));
  } catch (error) {
    dispatch(getExchangeRatesError(error));
  }
};
