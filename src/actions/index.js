// Coloque aqui suas actions

export const LOGIN_USER = 'LOGIN_USER';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const logInUser = (email) => ({
  type: LOGIN_USER,
  payload: email,
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense,
});
