// Coloque aqui suas actions
export const LOGIN = 'LOGIN';

const login = (payload) => ({
  type: LOGIN,
  payload,
});

export default login;

// const loginAction = (payload) => ({ type: LOGIN, payload });
// export default loginAction;
