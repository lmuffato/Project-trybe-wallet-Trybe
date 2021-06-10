import { LOGIN } from '../constants';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case LOGIN:
    return { ...state, email: payload };
  default:
    return state;
  }
};

export default user;
