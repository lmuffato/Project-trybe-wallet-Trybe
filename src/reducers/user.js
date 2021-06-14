// Esse reducer será responsável por tratar as informações da pessoa usuária
import {
  ADD_EMAIL,
} from '../actions/index';

const INITIAL_STATE = {
  user: [],
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_EMAIL:
    return {
      ...state,
      user: state.user.concat(action.payload.email),
    };
  default:
    return state;
  }
}

export default user;
