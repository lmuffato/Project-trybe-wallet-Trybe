// Esse reducer será responsável por tratar as informações da pessoa usuári

import { LOGIN_DATA } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_DATA:
    return { email: action.state.email };
  default: return state;
  }
}

export default user;
