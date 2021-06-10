import { ADD_COINS, REQUEST_COINS } from '../actions/index';

const INITIAL_STATE = {
  wallet: {
    loading: false,
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_COINS:
    return { ...state, loading: true };
  case ADD_COINS:
    return {
      ...state,
      loading: false,
      currencies: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
