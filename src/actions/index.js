// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const TOTAL_VALUE = 'TOTAL_VALUE';

// action creator > funcao que retorna uma action
// LOGIN
export const loginAction = (payload) => ({
  type: LOGIN,
  payload,
});

// TOTAL_VALUE
export const totalValueAction = (payload) => ({
  type: TOTAL_VALUE,
  payload,
});
