// Esse reducer será responsável por tratar as informações da pessoa usuária
import { CREATE_USER } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CREATE_USER:
    return {
      ...state,
      email: action.payload.email,
    };
  default:
    return state;
  }
}
