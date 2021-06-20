// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SAVE_EMAIL } from '../actions/index';

const user = (state = '', action) => {
  switch (action.type) {
  case SAVE_EMAIL:
    return { email: action.payload.value };
  default:
    return state;
  }
};

export default user;
