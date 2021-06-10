// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  ADD_EXPENSE,
  DEL_EXPENSE,
  EDIT_EXPENSE,
  GET_CURRENCY,
  REQUEST_API,
} from '../actions';

const INITIAL_STATE = {
  currencies: {},
  expenses: [],
  isLoalding: false,
  currentId: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCY:
    return {
      ...state,
      currencies: action.payload,
    };
  case REQUEST_API:
    return {
      ...state,
      isLoading: true,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.concat(action.payload),
      currentId: state.currentId + 1,
    };
  case DEL_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload),
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses.filter((expense) => expense.id !== action.payload.id),
        action.payload,
      ],
    };
  default:
    return state;
  }
}

export default wallet;
