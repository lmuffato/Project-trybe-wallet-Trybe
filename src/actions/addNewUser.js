import {
  LOGIN,
} from './index';

const INITIAL_STATE = [];

function addNewUser(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN:
    return [...state, action.type];
  default:
    return state;
  }
}

export default addNewUser;
