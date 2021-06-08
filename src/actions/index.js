// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});
