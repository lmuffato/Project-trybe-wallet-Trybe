import { WALLET } from '../actions/index';

const INITIAL_STATE = {
  wallet: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET:
    return action.payload;
  default:
    return state;
  }
}

export default wallet;
