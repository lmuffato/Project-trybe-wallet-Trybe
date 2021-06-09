// Esse reducer será responsável por tratar as informações da pessoa usuária
import { EMAIL } from '../actions';

const initialState = {
  email: '',
};

function user(state = initialState, action) {
  switch (action.type) {
  case EMAIL:
    return action.value;
  default:
    return state;
  }
}

export default user;
