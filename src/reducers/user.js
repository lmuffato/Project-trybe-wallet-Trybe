import { USER_EMAIL } from '../actions';

const USER_STATE = {
  email: '',
};

function user(state = USER_STATE, action) {
  switch (action.type) {
  case USER_EMAIL:
    return {
      email: action.email,
    };
  default:
    return state;
  }
}

export default user;
