// Coloque aqui suas actions

export const LOGIN_USER = 'LOGIN_USER';

export const logInUser = (email) => ({
  type: LOGIN_USER,
  payload: email,
});
