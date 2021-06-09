import { LOGIN } from '../actions/index';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

function userReducer(state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      user: {
        ...state.user,
        email: action.payload.email,
      },
    };
  default:
    return state;
  }
}

export default userReducer;
