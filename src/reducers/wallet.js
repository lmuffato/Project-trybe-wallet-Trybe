import {
  GET_CURRENCY,
  GET_CURRENCY_SUCCESS,
  GET_CURRENCY_ERROR,
  ADD_EXPENSES,
  DETELE_EXPENSE,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: null,
  isLoading: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCY:
    return {
      ...state,
      isLoading: true,
    };
  case GET_CURRENCY_SUCCESS:
    return {
      ...state,
      isLoading: false,
      currencies: action.payload,
    };
  case GET_CURRENCY_ERROR:
    return {
      ...state,
      isLoading: false,
      error: action.payload.error,
    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case DETELE_EXPENSE:
    return {
      ...state,
      expenses: action.payload,
    };
  default:
    return {
      ...state,
    };
  }
};

export default wallet;
