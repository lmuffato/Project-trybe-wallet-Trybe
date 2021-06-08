const LOGIN = 'LOGIN';

const login = (email, password) => ({ type: LOGIN, email, password });

export default login;
