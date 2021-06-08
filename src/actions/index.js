import currencyAPI from '../services/api';
import filterCurrencies from '../utils/wallet';

export const USER_LOGIN = 'USER_LOGIN';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const WALLET_CURRENCIES = 'WALLET_CURRENCIES';
export const FAILED_CURRENCIES = 'FAILED_CURRENCIES';

const requestCurrency = () => ({ type: REQUEST_CURRENCIES });

const walletCurrencies = (payload) => ({
  type: WALLET_CURRENCIES,
  payload,
});

const failedRequestCurrencies = (payload) => ({
  type: FAILED_CURRENCIES,
  payload,
});

export const fetchCurrency = () => async (dispatch) => {
  dispatch(requestCurrency());
  try {
    const currencies = await currencyAPI();
    const currenciesCodes = filterCurrencies(currencies);
    dispatch(walletCurrencies(currenciesCodes));
  } catch (error) {
    dispatch(failedRequestCurrencies(error));
  }
};

const addExpenses = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});

export const fetchExpenses = (expense) => async (dispatch) => {
  const exchangeRates = await currencyAPI();
  const updatedExpense = {
    ...expense,
    exchangeRates,
  };

  dispatch(addExpenses(updatedExpense));
};

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});
