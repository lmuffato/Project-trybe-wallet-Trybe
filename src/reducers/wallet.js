// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  GET_API_CURRENCY_SUCCESS,
} from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

function wallet(state = initialState, action) {
  switch (action.type) {
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
