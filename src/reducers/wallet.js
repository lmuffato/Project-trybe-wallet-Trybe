import { RECEIVE_CURRENCIES, ADD_EXPENSES } from '../actions/wallet';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case RECEIVE_CURRENCIES:
    return { ...state, currencies: action.currencies };
  case ADD_EXPENSES:
    console.log(state, 'reducer');
    return {
      ...state,
      expenses: [...state.expenses, { ...action.expenses, id: state.expenses.length }],
    };
  default:
    return state;
  }
}
export default wallet;
