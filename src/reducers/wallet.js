// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCY, REQUEST_API } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoalding: false,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCY:
    return {
      ...state,
      currencies: action.payload,
    };
  case REQUEST_API:
    return {
      ...state,
      isLoading: true,
    };
  default:
    return state;
  }
}

export default wallet;
