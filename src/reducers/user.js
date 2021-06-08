// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN } from '../actions';

const initialState = {
  email: '',
};

export default function user(state = initialState, { type, payload }) {
  switch (type) {
  case LOGIN:
    return {
      ...state,
      email: payload,
    };
  default:
    return state;
  }
}
