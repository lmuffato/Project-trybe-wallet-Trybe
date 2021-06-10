import { REQUEST_CURRENCY, RECEIVE_CURRENCY, RECEIVE_CURRENCY_ONCLICK,
  REMOVE_EXPENSE } from '../actions';

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
  case RECEIVE_CURRENCY_ONCLICK:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
      isFetching: false,
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id),
    };
  default:
    return state;
  }
}
export default wallet;
