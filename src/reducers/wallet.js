import { ACRONYM_COINS } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ACRONYM_COINS:
    return {
      ...state,
      currencies: action.payload,
    };

  default:
    return state;
  }
}

export default walletReducer;
