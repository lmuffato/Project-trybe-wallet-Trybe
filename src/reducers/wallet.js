import { ADD_EXPENSE, DEL_EXPENSE, GET_CURRENCY_SUCCESS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return ({
      ...state,
      expenses: [...state.expenses, action.payload],
    });

  case DEL_EXPENSE:
    return ({
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload),
    });

  case GET_CURRENCY_SUCCESS:
    return ({
      ...state,
      currencies: action.payload,
    });

  default:
    return state;
  }
};

export default wallet;
