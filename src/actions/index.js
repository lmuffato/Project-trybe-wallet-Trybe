const LOGIN = 'LOGIN';

// Coloque aqui suas actions
const login = (email, password) => ({
  type: LOGIN,
  email,
  password,
});

export default login;
