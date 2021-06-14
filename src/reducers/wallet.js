import { SAVE_EXPENSE, DELETE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.expenseDetails] };
  case DELETE_EXPENSE:
    return { ...state, expenses: [...action.updatedExpense] };
  default:
    return state;
  }
}

export default wallet;
