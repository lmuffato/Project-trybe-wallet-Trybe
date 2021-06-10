import { VALID_EMAIL } from '../actions/index';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case VALID_EMAIL:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return {
      ...state,
    };
  }
};

export default userReducer;
