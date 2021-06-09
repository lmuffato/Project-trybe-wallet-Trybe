import USER_LOGIN from './actionTypes';

const userLogin = (userEmail) => ({
  type: USER_LOGIN,
  payload: {
    user: {
      email: userEmail,
    },
  },
});

export default userLogin;
