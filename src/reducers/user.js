// Esse reducer será responsável por tratar as informações da pessoa usuária
import { QUALQUER_COISA } from '../actions/index';

const USER_INITIAL_STATE = {
  user: {
    email: '',
  },
};

const user = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
  case QUALQUER_COISA:
    return { ...state, action };

  default:
    return { ...state };
  }
};

export default user;
