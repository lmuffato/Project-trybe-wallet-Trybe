// Coloque aqui suas actions
export const SET_EMAIL = 'SET_EMAIL';
export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const FAIL = 'FAIL';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export function setEmail(payload) {
  return {
    type: SET_EMAIL,
    payload,
  };
}
