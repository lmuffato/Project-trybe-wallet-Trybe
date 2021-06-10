// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_CURRENCIES, RECEIVE_CURRENCIES, FAILED_REQUEST, EXPENSES, DELETE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
  error: false,
  total: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state, loading: true };
  case RECEIVE_CURRENCIES: {
    const keys = Object.keys(action.currencies);
    const filteredKeys = keys.filter((key) => key !== 'USDT');
    return { ...state, currencies: filteredKeys };
  }
  case FAILED_REQUEST:
    return { ...state, error: true };
  case EXPENSES:
    return {
      ...state,
      expenses: [
        ...state.expenses, { ...action.expense, exchangeRates: action.exchangeRates }],
      total: Number(state.total) + Number(action.price),
    };
  case DELETE:
    return {
      ...state,
      expenses: action.payload.array,
      total: Number(state.total) - Number(action.payload.debt),
    };
  default:
    return state;
  }
}

export default wallet;
