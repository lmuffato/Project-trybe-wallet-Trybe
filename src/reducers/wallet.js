// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE, GET_CURRENCY,
  GET_CURRENCY_ERROR, GET_CURRENCY_SUCCESS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
  loading: true,
};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_EXPENSE:
    return state;
  case GET_CURRENCY:
    return { ...state, loading: true };
  case GET_CURRENCY_SUCCESS:
    return {
      ...state,
      loading: false,
      currencies: action.payload.currency,
    };
  case GET_CURRENCY_ERROR:
    return state;
  default:
    return state;
  }
}
