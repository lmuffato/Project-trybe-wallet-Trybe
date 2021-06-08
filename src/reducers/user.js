// Esse reducer será responsável por tratar as informações da pessoa usuária
import { UPDATE_EMAIL, UPDATE_PASSWORD, UPDATE_EMAIL_USER } from '../actions';

const INITIAL_STATE = {
  email: '',
  validade: {
    user: '',
    password: '',
  },
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case UPDATE_EMAIL:
    return {
      ...state,
      validade: {
        ...state.validade,
        user: action.payload,
      },
    };
  case UPDATE_PASSWORD:
    return {
      ...state,
      validade: {
        ...state.validade,
        password: action.payload,
      },
    };
  case UPDATE_EMAIL_USER:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
}

export default user;
