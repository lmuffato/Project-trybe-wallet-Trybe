import { LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
  // password: '',
};

function getUser(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN:
    return { email: action.payload,
      // password: action.payload.password,
    };
  default:
    return state;
  }
}

export default getUser;
