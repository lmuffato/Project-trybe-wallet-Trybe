import { USER_LOGIN } from '../actions/index';

const INICIAL_STATE = {
  user: {
    email: '',
  },
};

function userData(state = INICIAL_STATE, action) {
  switch (action.type) {
  case USER_LOGIN:
    return {
      email: action.user.email,
    };
  default:
    return state;
  }
}

export default userData;
