import {
  GET_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
  ADD_EXPENSE,
  DEL_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  selectedExchange: 'BRL',
  isLoading: false,
  error: '',
  totalExpenses: 0,
};

const newExpense = (state, action) => {
  const existsEl = state.expenses
    .findIndex((expense) => expense.id === action.payload.expense.id);
  if (existsEl < 0) {
    const { edit, ...expense } = action.payload.expense;
    return {
      ...state,
      expenses: [
        ...state.expenses, { id: state.expenses.length, ...expense },
      ],
    };
  }
  const { exchangeRates } = state.expenses[existsEl];
  const newItem = {
    ...action.payload.expense,
    exchangeRates,
  };
  const { edit, ...item } = newItem;
  return {
    ...state,
    expenses: [
      ...state.expenses.slice(0, existsEl),
      item,
      ...state.expenses.slice(existsEl + 1),
    ],
  };
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'TESTE':
    return state;
  case GET_CURRENCIES:
    return {
      ...state,
      isLoading: true,
    };
  case GET_CURRENCIES_SUCCESS:
    return {
      ...state,
      isLoading: false,
      currencies: [
        ...Object.keys(action.payload.currencies)
          .filter((key) => key !== 'USDT' && key !== 'DOGE'),
      ],
    };
  case GET_CURRENCIES_ERROR:
    return {
      ...state,
      isLoading: true,
      error: action.payload.error,
    };
  case ADD_EXPENSE:
    return newExpense(state, action);
  case DEL_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses.filter((expense) => expense.id !== action.payload.expense.id),
      ],
    };
  default:
    return state;
  }
};

export default wallet;
