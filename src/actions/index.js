const LOGIN = 'LOGIN';
const ADD_EXPENSE = 'ADD_EXPENSE';

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});
