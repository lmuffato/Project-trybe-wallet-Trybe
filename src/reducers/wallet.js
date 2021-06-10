import {
  GET_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
  SET_NEW_EXPENSE,
  UPDATE_TOTAL_EXPENSES,
} from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  currencies: '',
  error: null,
  expenses: [],
  totalExpenses: 0,
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state, isLoading: true };
  case GET_CURRENCIES_SUCCESS:
    return { ...state, isLoading: false, currencies: action.payload, error: null };
  case GET_CURRENCIES_ERROR:
    return { ...state, error: action.payload.error };
  case SET_NEW_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case UPDATE_TOTAL_EXPENSES:
    return { ...state, totalExpenses: state.totalExpenses + action.payload };
  default:
    return state;
  }
}

export default walletReducer;
