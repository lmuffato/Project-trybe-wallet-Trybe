// Esse reducer será responsável por tratar as informações da pessoa usuária
import { CREATE_USER } from '../actions/index';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CREATE_USER:
    return {
      user: action.payload.user,
    };
  default:
    return state;
  }
}
