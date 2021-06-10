export const USER_DATA = 'USER_DATA';

const login = (email, password) => ({
  type: USER_DATA,
  payload: {
    email,
    password,
  },
});

export default login;
