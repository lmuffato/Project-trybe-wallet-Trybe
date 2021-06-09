// Coloque aqui suas actions
export const LOGIN = 'LOGIN';

export const salvarLogin = (email) => ({
  type: LOGIN,
  email,
});
