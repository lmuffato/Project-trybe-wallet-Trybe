import { USER_LOGIN } from '../actions';

const initialState = {
  email: '',
  password: '',
};

export default function user(state = initialState, action) {
  switch (action.type) {
  case USER_LOGIN: {
    const { payload: { email, password } } = action;
    return {
      ...state,
      email,
      password,
    };
  }
  default:
    return state;
  }
}
