import {
  REQUEST_CURRENCIES,
  WALLET_CURRENCIES,
  FAILED_CURRENCIES,
  ADD_EXPENSES,
  EDIT_EXPENSES,
  DELETE_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  loading: false,
  error: '',
  currencies: [],
  expenses: [],
  edit: false,
  id: 0,
};

function userWalletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state, loading: true };

  case WALLET_CURRENCIES:
    return { ...state, loading: false, currencies: action.payload };

  case FAILED_CURRENCIES:
    return { ...state, loading: false, error: action.payload };

  case ADD_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.payload] };

  case EDIT_EXPENSES:
    return { ...state, edit: action.edit, id: action.id };

  case DELETE_EXPENSE:
    return { ...state, expenses: action.payload };

  default:
    return state;
  }
}

export default userWalletReducer;
