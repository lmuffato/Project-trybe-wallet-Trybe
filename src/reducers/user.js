import { USER_LOGIN } from '../actions/user';

const INITIAL_STATE = {
  email: '',
  password: '',
  isAuth: true,
};

function user(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case USER_LOGIN:
    return {
      ...state,
      ...payload,
      isAuth: true,
    };
  default:
    return state;
  }
}

export default user;
