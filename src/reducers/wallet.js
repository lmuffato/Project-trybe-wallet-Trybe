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
    return {
      ...state,
      expenses: [
        ...state.expenses, { id: state.expenses.length, ...action.payload.expense },
      ],
    };
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
