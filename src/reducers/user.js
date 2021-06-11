import { USER_LOGIN } from '../actions';

const initialState = {
  email: '',
  password: '',
};

export default function user(state = initialState, action) {
  switch (action.type) {
  case USER_LOGIN: {
    return { ...state,
      email: action.payload,
      password: action.payload,
    };
  }
  default:
    return state;
  }
}
