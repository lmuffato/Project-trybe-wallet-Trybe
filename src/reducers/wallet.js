// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXCHANGE_RATE, ADD_EXPENSE, GET_CURRENCY, TOTAL_UPDATE } from '../actions';

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
  case ADD_EXCHANGE_RATE:
    return {
      ...state,
      exchangeRate: action.payload.rate,
    };
  case GET_CURRENCY:
    return {
      ...state,
      currencies: action.payload.currency,
    };
  case TOTAL_UPDATE:
    return state;
  default:
    return state;
  }
}
