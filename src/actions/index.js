// Coloque aqui suas actions
export const LOGIN_USER = 'LOGIN_USER';
export const WALLET = 'WALLET';

const loginUser = (payload) => ({
  type: LOGIN_USER,
  payload, // email
});

export default loginUser;
