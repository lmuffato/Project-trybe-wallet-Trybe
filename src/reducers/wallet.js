import {
  REQUEST_API, REQUEST_API_SUCESS, REQUEST_API_ERROR,
} from '../actions/getCurrencyActions';
import {
  CREATE_EXCHANGE, EDIT_INFO, FINISH_EDIT, REMOVE_EXPENSE,
} from '../actions/tableActions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_WALLET_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  error: null,
  edit: false,
  item: {},
};

// Lógica baseada em uma resposta encontrada no stack overflow: https://stackoverflow.com/questions/35628774/how-to-update-single-value-inside-specific-array-item-in-redux
const editExpense = (state, action) => {
  const elementExist = state.expenses
    .filter((expense) => expense.id === action.payload.id);
  if (elementExist) {
    const { id } = action.payload;
    return {
      ...state,
      expenses: [
        ...state.expenses.slice(0, id),
        action.payload,
        ...state.expenses.slice(id + 1),
      ],
      edit: false,
      item: {},
    };
  }
};

const wallet = (state = INITIAL_WALLET_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return ({
      ...state,
      isLoading: true,
    });
  case REQUEST_API_SUCESS:
    return ({
      ...state,
      currencies: [...Object.keys(action.payload)],
      isLoading: false,
    });
  case REQUEST_API_ERROR:
    return ({
      ...state,
      error: action.payload.error,
      isLoading: false,
    });
  case CREATE_EXCHANGE:
    return ({
      ...state,
      expenses: [...state.expenses, action.payload],
    });
  case REMOVE_EXPENSE:
    return ({
      ...state,
      expenses: action.payload,
    });
  case EDIT_INFO:
    return ({
      ...state,
      edit: true,
      item: action.payload,
    });
  case FINISH_EDIT:
    return editExpense(state, action);
  default:
    return state;
  }
};

export default wallet;
