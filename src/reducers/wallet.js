// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_CURRENCIES,
  ADD_EXPENSES,
  LOAD_CURRENCIES,
  REMOVE_EXPENSES,
  EDIT_EXPENSE,
  ADD_EDIT_EXPENSE } from '../actions';

const INITIAL_STATE = {
  isloading: false,
  currencies: [],
  expenses: [],
  isEditing: false,
  editObject: {},
};
// consultado ordenação de array em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
const orderArrayExpense = (a, b) => {
  const positionInArray = -1;
  if (a.id < b.id) {
    return positionInArray;
  } if (b.id < a.id) return 1;
  return 0;
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOAD_CURRENCIES:
    return { ...state, isloading: true };
  case ADD_CURRENCIES:
    return { ...state,
      isloading: false,
      currencies: action.payload.currencies };
  case ADD_EXPENSES:
    return { ...state,
      isloading: false,
      expenses: [...state.expenses, action.payload] };
  case REMOVE_EXPENSES:
    return { ...state,
      isloading: false,
      expenses: action.payload };
  case EDIT_EXPENSE:
    return { ...state,
      isEditing: true,
      editObject: action.payload };
  case ADD_EDIT_EXPENSE:
    return { ...state,
      isEditing: false,
      editObject: {},
      expenses: [...state.expenses
        .filter((obj) => obj.id !== action.payload.id), action.payload]
        .sort(orderArrayExpense) };
  default:
    return state;
  }
}

export default walletReducer;
