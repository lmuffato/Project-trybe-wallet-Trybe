// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SAVE_VALUE_EMAIL } from '../actions';

const INITIAL_STATE_USER = {
  user: {
    email: '',
  },
};

const userLogin = (state = INITIAL_STATE_USER, action) => {
  switch (action.type) {
  case SAVE_VALUE_EMAIL:
    console.log(action.email);
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};
export default userLogin;
