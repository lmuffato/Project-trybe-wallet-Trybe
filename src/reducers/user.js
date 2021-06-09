// Esse reducer será responsável por tratar as informações da pessoa usuária

import { VALID_EMAIL } from '../actions/index';

const initialState = {
  email: 'alguem@email.com',
};

function user(state = initialState, action) {
  switch (action.type) {
  case VALID_EMAIL:
    return { ...state, user: { ...user.email, email: action.email },
    };
  default:
    return state;
  }
}

export default user;
