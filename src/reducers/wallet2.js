// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  EXCHANGEAPI,
  EXCHANGE_RATES,
  SUM_EXPENSES,
} from '../actions/index';

const INITIAL_STATE = {
  exchangeApi: {},
  exchangeRates: {},
  totalExpenses: 0,
};

export default function wallet2(state = INITIAL_STATE, action) {
  switch (action.type) {
  case EXCHANGEAPI:
    return { ...state, exchangeApi: action.payload };
  case EXCHANGE_RATES:
    return { ...state, exchangeRates: action.payload };
  case SUM_EXPENSES:
    return { ...state, totalExpenses: action.payload };
  default:
    return state;
  }
}
