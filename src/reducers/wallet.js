import { FETCH_CURRENCIES,
  FETCH_CURRENCIES_SUCCESS,
  FETCH_CURRENCIES_ERROR } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
  error: null,
};

function userWallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_CURRENCIES:
    return {
      ...state,
      loading: true,
    };
  case FETCH_CURRENCIES_SUCCESS: {
    const keys = Object.keys(action.currencies);
    const filteredKeys = keys.filter((key) => key !== 'USDT');
    return {
      ...state,
      loading: false,
      currencies: state.currencies.concat(filteredKeys),
    };
  }
  case FETCH_CURRENCIES_ERROR:
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  default:
    return state;
  }
}

export default userWallet;
