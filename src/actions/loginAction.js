export const LOGIN = 'LOGIN';

const userAction = (email) => ({
  type: LOGIN,
  email,
});

export default userAction;
