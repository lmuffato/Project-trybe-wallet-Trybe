import getExchange from '../services/exchangeAPI';

export const GET_LOGIN = 'QUALQUER_COISA1';
export const GET_CURRENCY = 'GET_CURRENCY';
export const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';
export const GET_CURRENCY_ERROR = 'GET_CURRENCY_ERROR';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const DETELE_EXPENSE = 'DETELE_EXPENSE';

export const user = (payload) => ({
  type: GET_LOGIN,
  payload,
});

export const wallet = () => ({
  type: GET_CURRENCY,
});

export const getExchangeSuccess = (payload) => ({
  type: GET_CURRENCY_SUCCESS,
  payload,
});

export const getExchangeError = (payload) => ({
  type: GET_CURRENCY_ERROR,
  payload,
});

const filterCurrencies = (currencies) => {
  const filteredCurrencies = Object.keys(currencies).filter(
    (currency) => currency !== 'USDT',
  );

  return filteredCurrencies.map((currency) => {
    const { code } = currencies[currency];
    return code;
  });
};

export const getExchangeThunk = () => async (dispatch) => {
  // is loading true
  dispatch(wallet());

  // chama a api
  try {
    const fetch = await getExchange();
    const filteredFetch = filterCurrencies(fetch);
    // deu certo a chamada da api
    dispatch(getExchangeSuccess(filteredFetch));
  } catch (error) {
    dispatch(getExchangeError(error));
  }
};

export const addExpenses = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export const deleteExpense = (payload) => ({
  type: DETELE_EXPENSE,
  payload,
});

export const expensesThunk = (state) => async (dispatch) => {
  const exchangeRates = await getExchange();
  const expenses = {
    ...state,
    exchangeRates,
  };

  dispatch(addExpenses(expenses));
};
