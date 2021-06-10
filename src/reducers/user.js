import { USER_DATA } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function userReducer(state = INITIAL_STATE, action) {
  const { payload } = action;

  switch (action.type) {
  case USER_DATA:
    return {
      ...state,
      email: payload.email,
      password: payload.password,
    };
  default:
    return state;
  }
}

export default userReducer;
