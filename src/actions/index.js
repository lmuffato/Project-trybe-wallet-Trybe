import { getCurrentExchangeRates } from '../services/api';

export const login = (payload) => ({ type: 'LOGIN', payload });

export const fetchCurrentExchangeRates = () => ({
  type: 'FETCH_CURRENT_EXCHANGE_RATES',
});

export const getCurrentExchangeRatesError = (error) => ({
  type: 'GET_CURRENT_EXCHANGE_ERROR',
  error,
});

export const addExpense = (payload) => ({
  type: 'ADD_EXPENSE',
  payload,
});

export const deleteExpense = (payload) => ({
  type: 'DELETE_EXPENSE',
  payload,
});

export const addExpensesThunk = (expense) => (dispatch) => {
  dispatch(fetchCurrentExchangeRates());

  getCurrentExchangeRates()
    .then((res) => {
      const exchangeRates = res;
      dispatch(addExpense({
        ...expense,
        exchangeRates,
      }));
    })
    .catch((error) => {
      dispatch(getCurrentExchangeRatesError(error));
    });
};
