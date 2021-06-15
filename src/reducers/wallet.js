import {
  GET_CURRENCIES,
  GET_CURRENCIES_ERROR,
  GET_CURRENCIES_LIST_SUCCESS,
  GET_CURRENCIES_DATA_SUCCESS,
} from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currencies: [],
  expenses: [],
  loading: false,
  error: null,
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state, loading: true };
  case GET_CURRENCIES_ERROR:
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  case GET_CURRENCIES_LIST_SUCCESS:
    return {
      ...state,
      loading: false,
      currencies: action.currenciesList,
    };
  case GET_CURRENCIES_DATA_SUCCESS:
    return state;
  default:
    return state;
  }
};

export default wallet;
