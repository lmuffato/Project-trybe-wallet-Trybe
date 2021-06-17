// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_MONEY, REQUEST_API, ADD_EXPENSES } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

export default function wallet(state = initialState, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      load: true,
    };
  case GET_MONEY:
    return {
      ...state,
      currencies: action.payload.currencies,
      load: false,
    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload.expenses],
    };
  default:
    return state;
  }
}
