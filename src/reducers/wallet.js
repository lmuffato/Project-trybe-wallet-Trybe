import { ADD_EXPENSE, DELETE_BTN, REQUEST_API } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

export default function wallet(state = initialState, action) {
  switch (action.type) {
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.expense] };
  case DELETE_BTN:
    return { ...state, expenses: action.expense };
  case REQUEST_API:
    return { ...state, currencies: action.currency };
  default:
    return state;
  }
}
