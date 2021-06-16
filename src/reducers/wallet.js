// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCY, GET_CURRENCY_SUCCESS, GET_CURRENCY_ERROR } from '../actions';

const INITIAL_STATE = {
  loading: false,
  currencies: [],
  error: null,
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCY:
    return { ...state, loading: true };
  case GET_CURRENCY_SUCCESS:
    return { ...state, loading: false, currencies: action.payload, error: null };
  case GET_CURRENCY_ERROR:
    return { ...state, error: action.payload.error };
  default:
    return state;
  }
}

export default walletReducer;
