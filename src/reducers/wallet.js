import { WALLET, ADD_CURRENCIES, ADD_EXPENSE, DEL_EXPENSE } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET:
    return { ...state, action };
  case ADD_CURRENCIES:
    return { ...state, currencies: action.payload.currencies };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case DEL_EXPENSE:
    return { ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload) };
  default:
    return state;
  }
};

export default user;
