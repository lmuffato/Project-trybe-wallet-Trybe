import { STORE_USER } from '../actions';

const INITIAL_STATE = {
  email: '',
};

export default function userReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case STORE_USER:
    return payload;
  default:
    return state;
  }
}
