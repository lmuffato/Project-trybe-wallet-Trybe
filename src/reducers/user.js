import { SAVE_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};
// recebe da action
const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_EMAIL:
    return action.email;
  default:
    return state;
  }
};

export default user;
