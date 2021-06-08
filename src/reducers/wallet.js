import {
  REQUEST_CURRENCIES, ADD_EXPENSE, IS_FETCHING,
} from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  currencies: [],
  expenses: [],
  id: -1,
  totalValue: 0,
};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case IS_FETCHING:
    return {
      ...state,
      isFetching: true,
    };
  case REQUEST_CURRENCIES:
    return {
      ...state,
      isFetching: false,
      currencies: action.payload,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      isFetching: false,
      expenses: [...state.expenses, action.payload.localState],
      id: action.payload.id,
      totalValue: Number(state.totalValue) + Number(action.payload.totalAmount),
    };
  default:
    return state;
  }
}
