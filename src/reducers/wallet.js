import {
  GET_CURRENCY,
  GET_CURRENCY_SUCCESS,
  GET_CURRENCY_ERROR,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: null,
  isLoading: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCY:
    return {
      ...state,
      isLoading: true,
    };
  case GET_CURRENCY_SUCCESS:
    return {
      ...state,
      isLoading: false,
      currencies: action.payload.currencies,
      expenses: action.payload.expenses,
    };
  case GET_CURRENCY_ERROR:
    return {
      ...state,
      isLoading: false,
      error: action.payload.error,
    };
  default:
    return {
      ...state,
    };
  }
};

export default wallet;
