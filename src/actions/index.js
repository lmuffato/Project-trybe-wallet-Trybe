// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
const signIn = (payload) => ({
  type: LOGIN,
  payload,
});

export default signIn;
