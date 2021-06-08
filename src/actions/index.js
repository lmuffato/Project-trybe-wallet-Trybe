// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';

const loginAction = (payload) => ({ type: LOGIN, payload });
export default loginAction;

export const addingExpense = (payload) => ({ type: ADD_EXPENSE, payload });
