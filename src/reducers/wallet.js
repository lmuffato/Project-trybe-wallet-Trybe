import { TOTAL_VALUE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case TOTAL_VALUE:
    return {
      ...state,
      total: state.expenses.value + action.payload,
    };

  default:
    return state;
  }
}

export default walletReducer;
