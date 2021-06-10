// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER_WALLET } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_WALLET:
    return { email: action.email };
  default:
    return state;
  }
};

export default user;
