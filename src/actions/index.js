export const LOGIN_DATA = 'LOGIN_DATA';

export const submitUser = (email, password) => ({
  type: LOGIN_DATA,
  payload: {
    email,
    password,
  },
});
