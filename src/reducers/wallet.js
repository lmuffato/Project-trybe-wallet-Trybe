// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  ADD_EXPENSE,
  GET_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
  DELETE_EXPENSE,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: null,
  isLoading: false,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case GET_CURRENCIES:
    return {
      ...state,
      isLoading: true,
    };
  case GET_CURRENCIES_SUCCESS:
    return {
      ...state,
      isLoading: false,
      currencies: action.payload,
    };
  case GET_CURRENCIES_ERROR:
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses.filter((expense) => expense !== action.payload)],
    };
  default:
    return state;
  }
}

export default wallet;
