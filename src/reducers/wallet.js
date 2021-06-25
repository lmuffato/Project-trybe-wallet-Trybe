import { GET_CURRENCY_SUCCESS, GET_EXPENSES_SUCCESS, DELETE } from '../actions/wallet';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCY_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
    };
  case GET_EXPENSES_SUCCESS:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case DELETE:
    return {
      ...state,
      expenses: [...state.expenses.filter((expense) => expense !== action.payload)],
    };
  default:
    return state;
  }
};

export default wallet;
