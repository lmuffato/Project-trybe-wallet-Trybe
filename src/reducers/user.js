import { GET_EMAIL } from '../actions/index';

const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_EMAIL:
    return { email: action.email };
  default:
    return state;
  }
};

export default user;
