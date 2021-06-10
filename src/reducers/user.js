import { SET_USER } from '../actions/actions_type';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_USER:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default user;
