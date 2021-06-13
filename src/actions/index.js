// Coloque aqui suas actions
import { ADD_USER,
  ADD_EXPENSE,
  FETCH_CURRENCIES,
  FETCH_CURRENCIES_SUCESS,
  FETCH_CURRENCIES_ERROR, 
  DELETE_EXPENSES } from './actionsTypes';

import currencyApi from '../services/currencyApi';

export const addUser = (email) => ({
  type: ADD_USER,
  user: email,
});

export const addExpense = (arrayExpenses) => ({
  type: ADD_EXPENSE,
  expenses: arrayExpenses,
});

export const fetchCurrencies = () => ({
  type: FETCH_CURRENCIES,
});

export const fetchCurrenciesSucess = (currencies) => ({
  type: FETCH_CURRENCIES_SUCESS,
  currencies,
});

export const fetchCurrenciesError = (payload) => ({
  type: FETCH_CURRENCIES_ERROR,
  payload,
});

export const deleteExpenses = (payload) => ({
  type: DELETE_EXPENSES,
  payload,
});

export const getCurrencyThunk = () => (dispatch) => {
  dispatch(fetchCurrencies());
  currencyApi()
    .then((res) => {
      dispatch(fetchCurrenciesSucess(res));
    })
    .catch(() => { dispatch(fetchCurrenciesError()); });
};

export const getExchange = (exchange) => (dispatch) => {
  currencyApi()
    .then((res) => {
      dispatch(addExpense(([{
        ...exchange,
        exchangeRates: res,
      }])));
    });
};
