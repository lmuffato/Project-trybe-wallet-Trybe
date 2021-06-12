import {
  GET_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  UPDATE_TOTAL,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  error: null,
  total: 0,
};

const wallet = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      isLoading: false,
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
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.expense],
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((item) => item.id !== action.id),
    };
  case UPDATE_TOTAL:
    return {
      ...state,
      total: action.value,
    };
  default:
    return state;
  }
};

export default wallet;

/* function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SEND_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.expense],
    };
  case UPDATE_TOTAL:
    return {
      ...state,
      total: action.value,
    };
  default:
    return state;
  }
}

export default wallet; */
