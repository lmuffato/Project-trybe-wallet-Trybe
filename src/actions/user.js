import { LOGIN_USER } from './index';

const loginUser = (payload) => ({
  type: LOGIN_USER,
  payload, // email
});

export default loginUser;
