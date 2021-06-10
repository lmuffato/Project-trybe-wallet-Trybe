// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  FETCH_CURRENCIES,
  FETCH_CURRENCIES_ERROR,
  FETCH_CURRENCIES_SUCCESS,
  ADD_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
  error: null,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_CURRENCIES:
    return {
      ...state,
      loading: true,
    };
  case FETCH_CURRENCIES_SUCCESS: {
    const keys = Object.keys(action.currencies);
    const filteredKeys = keys.filter((key) => key !== 'USDT');
    return {
      ...state,
      loading: false,
      currencies: state.currencies.concat(filteredKeys),
    };
  }
  case FETCH_CURRENCIES_ERROR:
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.concat(action.expenses),
    };
  default:
    return state;
  }
}

export default wallet;
