import { REQUEST_RATES, SET_RATES, UPDATE_EXPENSES, REMOVE_EXPENSE } from '../constants';

const INITIAL_STATE = {
  isFetching: false,
  exchangeRates: {},
  expenses: [],
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case REQUEST_RATES:
    return { ...state, isFetching: true };
  case SET_RATES:
    return { ...state, exchangeRates: payload, isFetching: false };
  case UPDATE_EXPENSES:
    return { ...state, expenses: payload };
  case REMOVE_EXPENSE:
    return {
      ...state, expenses: state.expenses.filter(({ id }) => id !== Number(payload)),
    };
  default:
    return state;
  }
};

export default wallet;
