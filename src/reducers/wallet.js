// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  ADD_EXPENSE,
  START_EDITING,
  STOP_EDITING,
  EDITING_SUCCESS,
  GET_CURRENCIES_SUCCESS,
  GET_RAW_CURRENCIES,
  // GET_CURRENCIES_ERROR,
  REMOVE_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  currentCurrencies: {},
  editingExpense: false,
  selectedExpense: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES_SUCCESS:
    return { ...state, currencies: action.payload };
  case STOP_EDITING:
    return { ...state, editingExpense: false };
  case GET_RAW_CURRENCIES:
    return { ...state, currentCurrencies: action.payload };
  case ADD_EXPENSE:
    return {
      ...state,
      // sort() consultado na doc do MDN
      expenses: [...state.expenses, action.payload].sort((a, b) => a.id - b.id),
    };
  case REMOVE_EXPENSE:
    // Lógica de remoção de despesa inspirada na resolução do exercício
    // de Redux do freeCodeCamp: Remove an Item from an Array
    return {
      ...state,
      expenses: state.expenses
        .slice(0, action.payload)
        .concat(state.expenses.slice(action.payload + 1)),
    };
  case START_EDITING:
    return { ...state, selectedExpense: action.payload, editingExpense: true };
  case EDITING_SUCCESS:
    return {
      ...state,
      editingExpense: false,
      // first remove expense
      expenses: [...state.expenses, action.payload.editedExpense],
    };
  default:
    return state;
  }
}

export default wallet;
