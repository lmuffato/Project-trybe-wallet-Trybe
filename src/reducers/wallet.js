// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_CURRENCIES,
  ADD_EXPENSES,
  LOAD_CURRENCIES,
  REMOVE_EXPENSES } from '../actions';

const INITIAL_STATE = {
  isloading: false,
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOAD_CURRENCIES:
    return { ...state, isloading: true };
  case ADD_CURRENCIES:
    return { ...state,
      isloading: false,
      currencies: action.payload.currencies };
  case ADD_EXPENSES:
    return { ...state,
      isloading: false,
      expenses: [...state.expenses, action.payload] };
  case REMOVE_EXPENSES:
    return { ...state,
      isloading: false,
      expenses: action.payload };
  default:
    return state;
  }
}

export default walletReducer;
