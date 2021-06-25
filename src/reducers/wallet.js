import {
  CURRENCIES,
  WALLET,
  DELETING,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: 0,
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case CURRENCIES:
    return {
      ...state,
      currencies: action.payload.toLocaleString('pt-br'),
    };
  case DELETING:
    return {
      ...state,
      expenses: [state.expenses.filter((expense) => expense.id !== action.payload)],
    };
  default:
    return state;
  }
};

export default wallet;
