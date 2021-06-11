import {
  GET_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  GET_EXPENSES,
  GET_EXPENSES_SUCCESS,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state };
  case GET_CURRENCIES_SUCCESS:
    return { ...state, currencies: action.payload };
  case GET_EXPENSES:
    return { ...state };
  case GET_EXPENSES_SUCCESS:
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
};

export default wallet;
