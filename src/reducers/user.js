import { SET_EMAIL } from '../actions';

const INITIAL_USER_STATE = {
  email: '',
};

const user = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
  case SET_EMAIL:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default user;
