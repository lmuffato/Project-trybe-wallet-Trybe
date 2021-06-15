// Coloque aqui suas actions
export const LOGIN = 'LOGIN';

export const userData = (email, password) => ({
  type: LOGIN,
  payload: {
    email,
    password,
  },
});
