import { SET_CURRENCIES, SET_EXPENSE, SET_TOTAL_PRICE } from '../actions';

const INITIAL_WALLET_STATE = {
  currencies: [],
  expenses: [],
  totalPrice: 0,
};

const wallet = (state = INITIAL_WALLET_STATE, action) => {
  switch (action.type) {
  case SET_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  case SET_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.expense],
    };
  case SET_TOTAL_PRICE:
    return {
      ...state,
      totalPrice: action.totalPrice,
    };
  default:
    return state;
  }
};

export default wallet;
