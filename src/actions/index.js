// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const ADD_EXP = 'ADD_EXP';

const loginAction = (payload) => ({ type: LOGIN, payload });
export default loginAction;

export const addingExpense = (payload) => ({ type: ADD_EXP, payload });
