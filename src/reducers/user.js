// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER } from '../actions/index';

const USER_INITIAL_STATE = {
  user: {
    email: '',
  },
};

const user = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
  case USER:
    return { ...state, action };

  default:
    return { ...state };
  }
};

export default user;
