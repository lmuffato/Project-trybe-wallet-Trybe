// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_CURRENCIES,
  RESOLVED_CURRENCIES,
  REJECT_CURRENCIES,
  RESOLVED_EXPENSE,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  RESET_EXPENSE,
} from '../actions/index';

const INITIAL_STATE = {
  loadingCurrencies: false,
  loadingExpense: false,
  currencies: [],
  expenses: [],
  edit: false,
};

const adicionarId = (state, expense) => ({ ...expense, id: (state.length) });

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state, loadingCurrencies: true };
  case RESOLVED_CURRENCIES:
    return { ...state, loadingCurrencies: false, currencies: action.currency };
  case REJECT_CURRENCIES:
    return { ...state, loadingCurrencies: false, error: action.error };
  case RESOLVED_EXPENSE:
    return {
      ...state,
      loadingExpense: false,
      expenses: [...state.expenses, adicionarId(state.expenses, action.expense)],
    };
  case DELETE_EXPENSE:
    return { ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id) };
  case EDIT_EXPENSE:
    return {
      ...state,
      edit: true,
      editExpense: state.expenses.filter((expense) => expense.id === action.id),
    };
  case RESET_EXPENSE:
    return {
      ...state,
      edit: false,
      expenses: state.expenses.map((expense) => {
        if (expense.id === action.expense.id) {
          return action.expense;
        }
        return expense;
      }),
    };
  default:
    return state;
  }
};

export default wallet;
