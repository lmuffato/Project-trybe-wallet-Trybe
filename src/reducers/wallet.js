// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  GET_API_CURRENCY_SUCCESS,
  GET_TO_WALLET,
  GET_TOTAL_EXPENSES,
} from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  totalExpenses: 0,
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
  case GET_TOTAL_EXPENSES:
    return {
      ...state,
      totalExpenses: state.totalExpenses + action.payload,
    };
  default:
    return state;
  }
}

export default wallet;
