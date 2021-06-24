import { RECEIVE_CURRENCY, ADD_EXPENSES, DELETE_EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_CURRENCY:
    return { ...state, currencies: action.currency };
  case ADD_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.expense] };
  case DELETE_EXPENSES:
    return { ...state, expenses: action.expense };
  default:
    return state;
  }
};
export default wallet;
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
