import { TOTAL, WALLET } from '../actions/index';

const INITIAL_STATE = {
  expenses: [],
  totalCurrency: '0',
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET:
    return ({
      ...state,
      expenses: [...state.expenses, action.payload],
    });
  case TOTAL:
    return ({
      ...state,
      totalCurrency: (action.payload),
    });
  default:
    return state;
  }
}

export default wallet;
