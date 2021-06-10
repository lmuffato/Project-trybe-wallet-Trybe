// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  ADD_EXPENSE,
  REMOVE_EXPENSE_FROM_GLOBAL_STATE,
  GET_CURRENCIES,
  GET_CURRENCIES_FAILURE,
  GET_CURRENCIES_SUCCESS,
  // GET_EXCHANGE_RATES,
  // GET_EXCHANGE_RATES_SUCCESS,
  // GET_EXCHANGE_RATES_ERROR,
} from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  totalAmount: 0,
  isLoading: false,
  isFetching: false,
  error: null,
};

export default function wallet(state = initialState, { type, payload }) {
  switch (type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, payload],
      totalAmount: Number(state.totalAmount) + Number(payload.value),
    };
  case REMOVE_EXPENSE_FROM_GLOBAL_STATE:
    return {
      ...state,
      expenses: payload,
      totalAmount: Number(state.totalAmount) + Number(payload.value),
    };
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
  case GET_CURRENCIES_FAILURE:
    return {
      ...state,
      isLoading: false,
      error: payload,
    };
  default:
    return state;
  }
}
