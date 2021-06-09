// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { AGROUP_CURRENCIES, ADD_EXPENSE, SUM_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case AGROUP_CURRENCIES:
    return { ...state, currencies: action.currencies };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.expenses] };
  case SUM_EXPENSES:
    return { ...state, total: state.total + parseFloat(action.value) };
  default:
    return state;
  }
};

export default wallet;
