import { FETCH_API, ADD_EXPENSE } from '../common/def';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export default function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_API:
    return { ...state, currencies: [...action.payload] };
  case ADD_EXPENSE:
    return { ...state, expenses: state.expenses.concat(action.payload) };
  default:
    return state;
  }
}
