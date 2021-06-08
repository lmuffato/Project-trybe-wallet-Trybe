import { USER_LOGIN } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_LOGIN:
    return state;
  default:
    return state;
  }
}

export default user;
