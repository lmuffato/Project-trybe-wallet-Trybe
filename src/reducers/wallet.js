import { GET_CURRENCY, GET_CURRENCY_ERROR, GET_CURRENCY_SUCCESS } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  isFetching: false,
  currencies: [],
  currencyToExchange: 'BRL',
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCY: {
    return {
      ...state,
      isFetching: true,
    };
  }
  case GET_CURRENCY_SUCCESS: {
    return {
      ...state,
      isFetching: false,
      currencies: action.payload,
    };
  }
  case GET_CURRENCY_ERROR: {
    return {
      ...state,
      isFetching: false,
      error: action.payload,
    };
  }
  default:
    return state;
  }
}

export default wallet;
