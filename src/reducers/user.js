import {
  GET_LOGIN,
} from '../actions/index';

const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_LOGIN:
    return {
      email: action.payload,
      password: action.payload,
    };
  default:
    return {
      ...state,
    };
  }
};

export default user;
