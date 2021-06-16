// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  GET_CURRENCY,
  GET_CURRENCY_SUCCESS,
  GET_CURRENCY_ERROR,
  NEW_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  loading: false,
  currencies: [],
  expenses: [],
  id: 0,
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCY:
    return { ...state, loading: true };
  case GET_CURRENCY_SUCCESS:
    return { ...state, loading: false, currencies: action.payload };
  case GET_CURRENCY_ERROR:
    return { ...state, error: action.payload.error };
  case NEW_EXPENSE:
    return {
      ...state,
      id: state.id + 1,
      expenses: state.expenses.concat(action.payload),
    };
  default:
    return state;
  }
}

export default walletReducer;
