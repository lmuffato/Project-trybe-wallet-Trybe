import { ADD_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  id: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      id: state.id + 1,
      expenses: state.expenses.concat(action.payload),
    };
  default:
    return state;
  }
};

export default wallet;
