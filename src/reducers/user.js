import { USER_EMAIL, USER_PASSWORD } from '../actions/index';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_EMAIL:
    return { ...state, email: action.payload };
  case USER_PASSWORD:
    return { ...state, password: action.payload };
  default:
    return state;
  }
}
