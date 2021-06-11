import { ADD_EXPENSE, GET_CURRENCY, REMOVE_EXPENSE } from '../actions/actionTypes';

const initialState = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_CURRENCY:
    return {
      ...state,
      currencies: action.payload.data,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload.expense],
    };
  case REMOVE_EXPENSE: {
    const filterExpenses = state.expenses
      .filter((expense) => expense.id !== action.payload.expense.id);
    return {
      ...state,
      expenses: filterExpenses,
    };
  }
  default:
    return state;
  }
};

export default walletReducer;
