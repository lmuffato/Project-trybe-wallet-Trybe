import { SAVE_USER_EMAIL } from '../actions';

const userReducer = (state = {}, action) => {
  switch (action.type) {
  case SAVE_USER_EMAIL:
    return { ...state, user: { email: action.payload } };
  default:
    return state;
  }
};

export default userReducer;
