// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

export default function userReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case ADD_EMAIL:
    return payload;
  default:
    return state;
  }
}
