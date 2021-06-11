// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// lembrar de importar a action
import { GET_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  GET_EXPENSES,
  GET_EXPENSES_SUCCESS,
  DELETE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state };
  case GET_CURRENCIES_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
    };
  case GET_EXPENSES:
    return { ...state };
  case GET_EXPENSES_SUCCESS:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses.filter((element) => element !== action.payload)],
    };
  default:
    return state;
  }
};

export default wallet;
