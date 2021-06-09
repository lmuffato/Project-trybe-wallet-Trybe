// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  GET_API_CURRENCY_SUCCESS,
  GET_API_AWESOME,
} from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  isLoading: false,
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case GET_API_AWESOME:
    return {
      ...state,
      isLoading: true,
    };
  case GET_API_CURRENCY_SUCCESS:
    return {
      ...state,
      currencies: action.payload.allCurrency,
    };
  default:
    return state;
  }
}

export default wallet;
