const LOGIN = 'LOGIN';

const userLogin = (email) => ({
  type: LOGIN,
  payload: {
    email,
  },
});

export {
  LOGIN,
  userLogin,
};
