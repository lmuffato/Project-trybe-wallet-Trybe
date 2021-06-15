import { RECEIVE_CURRENCIES, ADD_EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.expenses,
      ],
    };
  default:
    return { ...state };
  }
};

export default userReducer;
