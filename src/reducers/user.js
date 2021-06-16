import { SET_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_EMAIL:
    return { ...state, email: action.payloadEmailValue };
  default:
    return state;
  }
};

export default user;
