const LOGIN = 'LOGIN';
const ADD_DESPESA = 'ADD_DESPESA';

export const login = (value) => ({ type: LOGIN, value });
export const addDespesa = (value) => ({ type: ADD_DESPESA, payload: value });
