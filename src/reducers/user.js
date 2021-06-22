import { USER_LOGIN } from '../actions/user';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function user(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case USER_LOGIN:
    return {
      ...state,
      ...payload,
    };
  default:
    return state;
  }
}

export default user;
