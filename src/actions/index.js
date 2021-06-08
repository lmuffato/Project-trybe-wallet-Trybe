// Coloque aqui suas actions
export const USER_LOGIN_SUCESS = 'USER_LOGIN_SUCESS';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const userLoginSucess = (payload) => ({
  type: USER_LOGIN_SUCESS,
  payload,
});
export const walletAddCurrencie = (payload) => ({
  type: ADD_CURRENCIES,
  payload,
});
export const walletAddExpense = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});
