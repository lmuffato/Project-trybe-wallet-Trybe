// Coloque aqui suas actions
export const LOGIN = 'LOGIN';

// action creator > funcao que retorna uma action
// LOGIN
export const loginAction = (payload) => ({
  type: LOGIN,
  payload,
});
