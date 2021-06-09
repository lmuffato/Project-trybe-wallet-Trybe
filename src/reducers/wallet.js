import { REQUEST_CURRENCY, RECEIVE_CURRENCY } from '../actions';

const initialState = {
  isFetching: false,
  currencies: {},
  expenses: [],
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case REQUEST_CURRENCY:
    return { ...state, isFetching: true };
  case RECEIVE_CURRENCY:
    return { ...state, currencies: action.currency, isFetching: false };
  default:
    return state;
  }
}
export default wallet;
