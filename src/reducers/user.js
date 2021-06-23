import { LOGIN } from '../actions';

const initialState = {
  email: '',
  password: '',
};

function user(state = initialState, action) {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password,
    };
  default:
    return state;
  }
}

export default user;
