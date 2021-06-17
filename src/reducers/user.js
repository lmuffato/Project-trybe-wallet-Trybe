import { USER } from '../actions';

const INITIAL_STATE = {
  email: 'none',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER:
    return action.payload;
  default:
    return state;
  }
}

export default user;
