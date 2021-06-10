import { SET_USER } from './actions_type';

const userAction = (payload) => ({
  type: SET_USER,
  payload,
});

export default userAction;
