// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_USER } from '../actions/index';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_USER:
    return {
      email: action.payload.email,
    };
  default:
    return state;
  }
};

export default user;
