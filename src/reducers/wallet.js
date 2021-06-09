import { GET_CURRENCIES, GET_CURRENCIES_SUCCESS, GET_CURRENCIES_ERROR } from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  currencies: '',
  error: null,
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state, isLoading: true };
  case GET_CURRENCIES_SUCCESS:
    return { ...state, isLoading: false, currencies: action.payload, error: null };
  case GET_CURRENCIES_ERROR:
    return { ...state, error: action.payload.error };
  default:
    return state;
  }
}

export default walletReducer;
