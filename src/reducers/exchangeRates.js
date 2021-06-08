import { UPDATE_EXPENSES } from '../actions';

const INITIAL_STATE = {};

function updateExchangeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case UPDATE_EXPENSES:
    return action.payload;
  default:
    return state;
  }
}

export default updateExchangeReducer;
