import { LOGIN } from '.';

const loginEmail = (payload) => ({
  type: LOGIN,
  payload,
});

export default loginEmail;
