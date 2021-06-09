export const LOGIN = 'LOGIN';

export const sendLogin = (payload) => ({
  type: LOGIN,
  payload: {
    email: payload.email,
  },
});
