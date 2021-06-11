// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, { user: { email } = {}, type }) => {
  switch (type) {
  case LOGIN:
    return {
      ...state,
      email,
    };
  default:
    return state;
  }
};

export default user;
