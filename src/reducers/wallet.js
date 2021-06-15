import { SAVE_EXPENSE, DELETE_EXPENSE, GET_EXPENSE, EDIT_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  setExpenses: {},
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.expenseDetails] };
  case DELETE_EXPENSE:
    return { ...state, expenses: [...action.filteredExpenses] };
  case GET_EXPENSE:
    return { ...state, setExpenses: action.getExpenseDetails };
  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: [...action.editedExpenses],
      setExpenses: {},
    };
  default:
    return state;
  }
}

export default wallet;
