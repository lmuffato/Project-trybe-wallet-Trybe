// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  ADD_EXPENSE,
  GET_CURRENCIES_SUCCESS,
  GET_RAW_CURRENCIES,
  GET_CURRENCIES_ERROR,
  REMOVE_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  currentCurrencies: {},
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES_SUCCESS:
    return { ...state, currencies: action.payload };
  case GET_CURRENCIES_ERROR:
    return state;
  case GET_RAW_CURRENCIES:
    return { ...state, currentCurrencies: action.payload };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case REMOVE_EXPENSE:
    // Lógica de remoção de despesa inspirada na resolução do exercício
    // de Redux do freeCodeCamp: Remove an Item from an Array
    return {
      ...state,
      expenses: state.expenses
        .slice(0, action.payload)
        .concat(state.expenses.slice(action.payload + 1)),
    };
  default:
    return state;
  }
}

export default wallet;
