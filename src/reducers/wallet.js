import { RECEIVE_CURRENCY, RECEIVE_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_CURRENCY:
    return { ...state, currencies: action.currency };
  case RECEIVE_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.payload] };

  default:
    return state;
  }
};

export default wallet;
