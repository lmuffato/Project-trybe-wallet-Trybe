import {
  ADD_EXPENSES,
  WALLET_CURRENCIES,
  REQUEST_CURRENCIES,
} from '../actions';

const initialState = {
  loading: false,
  error: '',
  currencies: [],
  expenses: [],
  edit: false,
  id: 0,
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state, loading: true };
  case WALLET_CURRENCIES:
    return { ...state, loading: false, currencies: action.payload };
  case ADD_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
}

export default wallet;
