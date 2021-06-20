// const ADD_WALLET = 'ADD_WALLET';
import {
  GET_CURRENCIES_API, GET_CURRENCIES_API_SUCCESS, GET_CURRENCIES_API_ERROR,
} from '../actions';

const initialState = {
  // currencies: ['USD', 'CAD', 'EUR', 'GBP', 'ARS', 'BTC', 'LTC',
  //   'JPY', 'CHF', 'AUD', 'CNY', 'ILS', 'ETH', 'XRP'], // moedas
  currencies: [],
  expenses: [], // despesas
  error: null,
  isLoading: true,
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case GET_CURRENCIES_API:
    return { ...state, isLoading: true };
  case GET_CURRENCIES_API_SUCCESS:
    return { ...state, isLoading: false, currencies: action.payload.currencies };
  case GET_CURRENCIES_API_ERROR:
    return { ...state, isLoading: false, error: action.payload.error };
  default:
    return state;
  }
}

export default wallet;
