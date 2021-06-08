import {
  REQUEST_CURRENCIES,
  WALLET_CURRENCIES,
  FAILED_CURRENCIES,
} from '../actions';

const INITIAL_STATE = {
  loading: false,
  error: '',
  currencies: [],
  expenses: [],
};

function userWalletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state, loading: true };

  case WALLET_CURRENCIES:
    return { ...state, loading: false, currencies: action.payload };

  case FAILED_CURRENCIES:
    return { ...state, loading: false, error: action.payload };

  default:
    return state;
  }
}

export default userWalletReducer;
