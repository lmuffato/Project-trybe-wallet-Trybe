// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN } from '../actions';

const user = {
  email: '',
};

function userReducer(state = user, action) {
  switch (action.type) {
  case LOGIN:
    return { email: action.email };
  default:
    return state;
  }
}

export default userReducer;
