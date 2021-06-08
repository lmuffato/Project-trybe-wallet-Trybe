import { USER_LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function userLoginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_LOGIN:
    return action.payload;

  default:
    return state;
  }
}

export default userLoginReducer;
