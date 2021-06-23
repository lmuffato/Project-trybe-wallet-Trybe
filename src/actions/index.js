export const LOGIN = 'LOGIN';
export const REQUEST_API = 'REQUEST_API';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_BTN = 'DELETE_BTN';

export const salvarLogin = (email) => ({
  type: LOGIN,
  email,
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  expense,
});

export const deletButton = (expense) => ({
  type: DELETE_BTN,
  expense,
});

export const requestApi = (currency) => ({
  type: REQUEST_API,
  currency,
});
