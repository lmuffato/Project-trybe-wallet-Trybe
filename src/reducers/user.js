// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER } from '../actions';

const initialState = {
  email: '',
};

export default function user(state = initialState, action) {
  switch (action.type) {
  case USER:
    return {
      ...state,
      user: {
        email: action.payload,
      },
    };
  default:
    return state;
  }
}
