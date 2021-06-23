// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER } from '../actions';

const USER_INITIAL_STATE = {
  email: '',
};

const user = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
  case USER:
    return { email: action.payload.email };
  default:
    return state;
  }
};

export default user;
