import { USER_LOGIN } from '../actions/index';

const INICIAL_STATE = {
  email: '',
};

function userData(state = INICIAL_STATE, action) {
  switch (action.type) {
  case USER_LOGIN:
    return {
      ...state,
      email: action.payload.email,
    };
  default:
    return state;
  }
}

export default userData;
