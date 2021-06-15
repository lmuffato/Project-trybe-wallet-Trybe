// import { login } from '../action/index';
// const USER = 'USER';

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
      email: action.payload.value.email,
      password: action.payload.value.password,
    };
  default:
    return state;
  }
}

export default user;
