import {
  REQUEST_CURRENCY,
  RECEIVE_CURRENCY,
  ADD_EXPENSE,
  DELETE_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCY:
    return { ...state, loading: true };

  case RECEIVE_CURRENCY:
    return {
      ...state,
      currencies: action.payload,
      loading: false,
    };

  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };

  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.payload),
    };
  default:
    return state;
  }
};

export default walletReducer;
