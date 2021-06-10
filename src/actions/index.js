import fetchReq from '../func/api';
import filterCurrencies from '../func/wallet';

export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const WALLET_CURRENCIES = 'WALLET_CURRENCIES';

const requestCurrency = () => ({ type: REQUEST_CURRENCIES });
const walletCurrencies = (payload) => ({
  type: WALLET_CURRENCIES,
  payload,
});
export const fetchCurrencyThunk = () => async (dispatch) => {
  dispatch(requestCurrency());
  const currencies = await fetchReq();
  const filteredCurr = filterCurrencies(currencies);
  dispatch(walletCurrencies(filteredCurr));
};
const addExpenses = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});
export const fetchExpensesThunk = (expense) => async (dispatch) => {
  const exchangeRates = await fetchReq();
  const newExpense = {
    ...expense,
    exchangeRates,
  };
  dispatch(addExpenses(newExpense));
};
export const userLogin = (payload) => ({
  type: ADD_EMAIL,
  payload,
});
