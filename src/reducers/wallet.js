import {
  CURRENCIES,
  DEL_EXPENSES,
  ERROR,
  REQUEST,
  SAVE_EXPENSES,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  request: false,
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST:
    return { ...state, request: !state.request };
  case ERROR:
    return { ...state, error: action.payload };
  case CURRENCIES:
    return { ...state, currencies: action.payload };
  case SAVE_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case DEL_EXPENSES:
    return { ...state, expenses: state.expenses.filter(({ id }) => id !== action.payload),
    };
  default:
    return state;
  }
};

export default wallet;
