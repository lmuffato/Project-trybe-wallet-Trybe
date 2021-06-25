// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE, GET_CURRENCY, TOTAL_UPDATE, REMOVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
  exchangeRate: '',
};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload.expense],
    };
  case GET_CURRENCY:
    return {
      ...state,
      currencies: action.payload.currency,
    };
  case TOTAL_UPDATE:
    return {
      ...state,
      total: action.payload.value,
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: action.payload.expenses,
    };
  default:
    return state;
  }
}
