// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { FETCH_CURRENCIES,
  FETCH_CURRENCIES_SUCESS,
  FETCH_CURRENCIES_ERROR,
  ADD_EXPENSE } from '../actions/actionsTypes';

const INNITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
  error: null,
  currentCurrency: 'BRL',
};

const wallet = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_CURRENCIES:
    return {
      ...state,
      loading: true,
    };
  case FETCH_CURRENCIES_SUCESS: {
    const keys = Object.keys(action.currencies);
    const filter = keys.filter((key) => key !== 'USDT');
    return {
      ...state,
      loading: false,
      currencies: state.currencies.concat(filter),
    };
  }
  case FETCH_CURRENCIES_ERROR:
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  case ADD_EXPENSE: {
    return {
      ...state,
      expenses: state.expenses.concat(action.expenses),
    };
  }
  default:
    return state;
  }
};

export default wallet;
