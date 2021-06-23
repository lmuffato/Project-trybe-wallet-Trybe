import { CURRENCIES, ERROR, REQUEST } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  request: false,
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST:
    return { ...state, request: !state.request };
  case ERROR:
    return { ...state, error: action.payload };
  case CURRENCIES:
    return { ...state, currencies: action.payload };
  default:
    return state;
  }
};

export default wallet;
