import { SET_CURRENCIES, SET_EXPENSES } from '../actions/actionsType';

const INITIAL_STATE = {
  currencies: null,
  expenses: [],
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case SET_CURRENCIES:
    return {
      ...state,
      currencies: payload,
    };
  case SET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, payload],
    };

  default:
    return state;
  }
};

export default wallet;
