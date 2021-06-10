import {
  SEND_CURRENCIES,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SEND_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  default:
    return state;
  }
}

export default wallet;
