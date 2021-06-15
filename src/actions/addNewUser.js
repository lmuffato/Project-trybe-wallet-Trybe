import {
  LOGIN,
} from './index';

const INITIAL_STATE = [];

function addNewUserAction(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN:
    return [...state, action];
  default:
    return state;
  }
}

export default addNewUserAction;
