import {
  GET_CURRENCIES,
  GET_CURRENCIES_ERROR,
  GET_CURRENCIES_SUCCESS,
} from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  error: null,
  currencies: [],
  expenses: [],
};

export default function walletReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case GET_CURRENCIES:
    return {
      ...state,
      isLoading: true,
    };

  case GET_CURRENCIES_SUCCESS:
    return {
      ...state,
      isLoading: false,
      currencies: payload,
    };

  case GET_CURRENCIES_ERROR:
    return {
      ...state,
      isLoading: false,
      error: `Houve um erro no carregamento das moedas. Error: ${payload}`,
    };

  default:
    return state;
  }
}
