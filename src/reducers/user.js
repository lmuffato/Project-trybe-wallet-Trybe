import {
  LOGIN,
} from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      email: [...state.email, action.payload],
    };
  default:
    return state;
  }
};

export default user;
