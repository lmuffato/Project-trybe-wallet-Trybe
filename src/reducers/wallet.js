import { REQUEST_CURRENCY, RECEIVE_CURRENCY } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCY:
    return { ...state, loading: true };

  case RECEIVE_CURRENCY:
    return {
      ...state,
      currencies: [...action.payload],
      loading: false,
    };
  default:
    return state;
  }
};

export default walletReducer;
