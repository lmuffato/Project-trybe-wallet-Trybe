import { CURRENCIES, CURRENCIES_SUCCESS, CURRENCIES_ERROR } from '../actions/wallet';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  error: null,
};

function wallet(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case CURRENCIES:
    return {
      ...state,
      isLoading: true,
      error: null,
    };
  case CURRENCIES_SUCCESS:
    return {
      ...state,
      isLoading: false,
      error: null,
      currencies: payload,
    };
  case CURRENCIES_ERROR:
    return {
      ...state,
      error: payload,
    };
  // case 'ADD_EXPENSE': {
  //   const { payload: { value } } = action;
  //   const newExpense = state.expenses.concat(value);
  //   return { ...state, newExpense };
  // }
  // case 'EDIT_EXPENSE':
  //   return { ...state };
  default:
    return { ...state };
  }
}

export default wallet;
