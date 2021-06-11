import { LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
};

export default function userReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case LOGIN:
    return payload;
  default:
    return state;
  }
}
