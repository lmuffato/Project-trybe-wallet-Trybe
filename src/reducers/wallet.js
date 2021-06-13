import {
  ADD_EXPENSE, DEL_EXPENSE,
  SAVE_EDIT_EXPENSE,
  EDIT_EXPENSE,
  GET_CURRENCY_SUCCESS,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  expenseToEdit: {},
  shouldFillEditForm: true,
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

  case SAVE_EDIT_EXPENSE:
    return ({
      ...state,
      expenseToEdit: action.payload,
    });

  case EDIT_EXPENSE:
    return ({
      ...state,
      expenses: state.expenses
        .slice(0, action.payload.index)
        .concat(
          action.payload.expense,
          state.expenses
            .slice(action.payload.index + 1, state.expenses.length),
        ),
      expenseToEdit: {},
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
