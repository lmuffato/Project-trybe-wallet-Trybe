import {
  GET_CURRENCIES_API, GET_CURRENCIES_API_SUCCESS,
  GET_CURRENCIES_API_ERROR, WALLET,
} from '../actions';

const initialState = {
  currencies: [], // moedas
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
  case WALLET:
    return { ...state, isLoading: false, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
}

export default wallet;
