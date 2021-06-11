import { USER_LOGIN } from '../actions';

const initialState = {
  email: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case USER_LOGIN:
    return { ...state, email: payload };

  default:
    return state;
  }
};
