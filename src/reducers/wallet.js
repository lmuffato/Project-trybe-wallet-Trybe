import { WALLET_CURRENCIES, WALLET_EXPENSES, WALLET_DELETE } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case WALLET_CURRENCIES:
    return { ...state, currencies: payload };
  case WALLET_EXPENSES:
    return { ...state, expenses: [...state.expenses, payload] };
  case WALLET_DELETE:
    return { ...state, expenses: payload };
  default:
    return state;
  }
};

export default wallet;
