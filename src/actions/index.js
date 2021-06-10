import { SET_USER } from './actionsType';

const userAction = (payload) => ({
  type: SET_USER,
  payload,
});

export default userAction;
