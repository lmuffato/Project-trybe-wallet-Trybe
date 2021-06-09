import { USER } from '../actions/index';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER:
    return { ...state, action };
  default:
    return { ...state };
  }
};

export default user;
