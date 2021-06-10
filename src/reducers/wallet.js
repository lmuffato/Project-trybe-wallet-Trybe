import {
  ADD_EXP,
  GET_CURR,
  GET_CURR_FAILURE,
  GET_CURR_SUCCESS,
  GET_EXCHANGE_RATES,
  GET_EXCHANGE_RATES_SUCCESS,
  GET_EXCHANGE_RATES_ERROR,
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
  case ADD_EXP:
    return {
      ...state,
      expenses: [...state.expenses, payload],
      totalAmount: Number(state.totalAmount) + Number(payload.value),
    };
  case GET_CURR:
    return {
      ...state,
      isLoading: true,
    };
  case GET_CURR_SUCCESS:
    return {
      ...state,
      isLoading: false,
      currencies: payload,
    };
  case GET_CURR_FAILURE:
    return {
      ...state,
      isLoading: false,
      error: payload,
    };
  case GET_EXCHANGE_RATES:
    return {
      ...state,
      isFetching: true,
    };
  case GET_EXCHANGE_RATES_SUCCESS:
    return {
      ...state,
      isFetching: false,
      exchangeRates: payload,
    };
  case GET_EXCHANGE_RATES_ERROR:
    return {
      ...state,
      isFetching: false,
      error: payload,
    };
  default:
    return state;
  }
}
