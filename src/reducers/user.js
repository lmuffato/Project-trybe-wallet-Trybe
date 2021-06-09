import { USER_LOGIN } from '../actions';

const initialState = {
  email: '',
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case USER_LOGIN:
    return { ...state, email: payload };

  default:
    return state;
  }
};

export default userReducer;
