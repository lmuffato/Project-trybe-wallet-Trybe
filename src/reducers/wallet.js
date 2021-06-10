// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  GET_API_CURRENCY_SUCCESS,
  GET_TO_WALLET,
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
      currencies: action.payload,
    };
  case GET_TO_WALLET:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
}

export default wallet;
