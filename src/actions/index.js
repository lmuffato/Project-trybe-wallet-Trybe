// Coloque aqui suas actions
import getCurrencies from '../services/api';
import filterCurrencies from '../services/filterCurrencies';

export const LOGIN = 'LOGIN';
export const ADD_EXP = 'ADD_EXP';
export const ADD_AMOUNT = 'ADD_AMOUNT';
export const ADD_DESCRIPTION = 'ADD_DESCRIPTION';
export const ADD_CURRENCY_TYPE = 'ADD_CURRENCY_TYPE';
export const PAYMENT_METHOD = 'PAYMENT_METHOD';
export const ADD_TAG = 'ADD_TAG';
export const GET_CURR = 'GET_CURR';
export const GET_CURR_SUCCESS = 'GET_CURR_SUCCESS';
export const GET_CURR_FAILURE = 'GET_CURR_FAILURE';
export const GET_EXCHANGE_RATES = 'GET_EXCHANGE_RATES';
export const GET_EXCHANGE_RATES_SUCCESS = 'GET_EXCHANGE_RATES_SUCCESS';
export const GET_EXCHANGE_RATES_ERROR = 'GET_EXCHANGE_RATES_ERROR';

const loginAction = (payload) => ({ type: LOGIN, payload });
export default loginAction;

export const addingExpense = (payload) => ({ type: ADD_EXP, payload });
export const addAmount = (payload) => ({ type: ADD_AMOUNT, payload });
export const addDescription = (payload) => ({ type: ADD_DESCRIPTION, payload });
export const addCurrencyType = (payload) => ({ type: ADD_CURRENCY_TYPE, payload });
export const addPaymentMethod = (payload) => ({ type: PAYMENT_METHOD, payload });
export const addTag = (payload) => ({ type: ADD_TAG, payload });

export const getCurrTry = () => ({ type: GET_CURR });
export const getCurrSuccess = (payload) => ({ type: GET_CURR_SUCCESS, payload });
export const getCurrFailure = (error) => ({ type: GET_CURR_FAILURE, error });

export const getExchangeRatesTry = () => ({ type: GET_EXCHANGE_RATES });
export const getExchangeRatesSuccess = (payload) => ({
  type: GET_EXCHANGE_RATES_SUCCESS,
  payload,
});

export const getExchangeRatesError = (error) => ({
  type: GET_EXCHANGE_RATES_ERROR,
  error,
});

export const getExchangeRatesThunk = () => async (dispatch) => {
  dispatch(getExchangeRatesTry());
  try {
    const request = await getCurrencies();
    dispatch(getExchangeRatesSuccess(request));
  } catch (error) {
    dispatch(getExchangeRatesError(error));
  }
};

export const getCurrenciesThunkTest = () => async (dispatch) => {
  dispatch(getCurrTry());
  try {
    const request = await getCurrencies();
    dispatch(getCurrSuccess(request));
  } catch (error) {
    dispatch(getCurrFailure(error));
  }
};

export const getCurrenciesThunk = () => async (dispatch) => {
  dispatch(getCurrTry());
  try {
    const request = await getCurrencies();
    const currencyList = filterCurrencies(request);
    dispatch(getCurrSuccess(currencyList));
  } catch (error) {
    dispatch(getCurrFailure(error));
  }
};
