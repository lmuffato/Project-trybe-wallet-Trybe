import {
  CURRENCIES,
  WALLET,
  DELETING,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  const n = -2;
  switch (action.type) {
  case WALLET:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case CURRENCIES:
    return {
      ...state,
      currencies: Math.round((action.payload * 100), n) / 100,
    };
  case DELETING:
    return {
      ...state,
      currencies: (
        Math.round(((parseFloat(state.currencies) - action.payload[1]) * 100), n) / 100
      ),
      expenses: state.expenses.filter((expense) => expense.id !== action.payload[0]),
    };
  default:
    return state;
  }
};

export default wallet;
