export const LOGIN = 'LOGIN';

export const addNewUser = (email) => ({
  type: LOGIN,
  payload: {
    email,
  },
});
