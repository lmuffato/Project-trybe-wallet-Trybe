// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { FETCH_ERROR, FETCH_SUCCESS, FETCH_START } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
  error: null,
};

const removeCurrencyUSDT = (currencies) => {
  const array = Object.values(currencies);
  const index = array.findIndex((currency) => currency.codein === 'BRLT');
  array.splice(index, 1);
  return array;
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_START:
    return {
      ...state, loading: true, error: null };
  case FETCH_SUCCESS:
    return {
      ...state,
      loading: false,
      error: null,
      currencies: removeCurrencyUSDT(action.payload),
    };
  case FETCH_ERROR:
    return { ...state,
      loading: false,
      error: action.payload,
      currencies: [],

    };
  default:
    return state;
  }
};

export default wallet;
