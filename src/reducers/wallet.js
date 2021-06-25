import { WALLET_COINS, WALLET_RATES } from '../actions/index';
import filteringData from '../services/filteringData';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case WALLET_COINS:
    return { ...state, currencies: filteringData(payload) };
  case WALLET_RATES:
    return { ...state, expenses: [...state.expenses, payload] };
  default:
    return state;
  }
};

export default wallet;
