// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  CURRENCIES_REQUEST,
  CURRENCIES_REQUEST_ERROR,
  CURRENCIES_REQUEST_SUCESS,
  PRICE_REQUEST,
  PRICE_REQUEST_SUCESS } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  error: null,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CURRENCIES_REQUEST:
    return { ...state, isLoading: true };
  case CURRENCIES_REQUEST_SUCESS:
    return { ...state, isLoading: false, currencies: action.state };
  case CURRENCIES_REQUEST_ERROR:
    return { ...state, error: action.state };
  case PRICE_REQUEST:
    return { ...state, isLoading: true };
  case PRICE_REQUEST_SUCESS:
    return { ...state,
      isLoading: false,
      expenses: [...state.expenses, action.state] };

  default: return state;
  }
}

export default wallet;
