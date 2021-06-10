import {
  SEND_CURRENCIES,
  ADD_EXPENSE,
  UPDATE_TOTAL,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SEND_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.expense],
    };
  case UPDATE_TOTAL:
    return {
      ...state,
      total: action.value,
    };
  default:
    return state;
  }
}

export default wallet;
