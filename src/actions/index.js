export const USER_LOGIN = 'USER_LOGIN';

const userLogin = (email, password) => ({
  type: 'USER_LOGIN',
  payload: {
    email,
    password,
  },
});

export default userLogin;
