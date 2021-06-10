import {
  DELETE_EXPENSE,
  GET_CURRENCIES,
  GET_CURRENCIES_ERROR,
  GET_CURRENCIES_SUCCESS,
  STORE_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  error: null,
  currencies: [],
  lastExpenseId: -1,
  expenses: [],
};

export default function walletReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case GET_CURRENCIES:
    return { ...state, isLoading: true };

  case GET_CURRENCIES_SUCCESS:
    return { ...state, isLoading: false, currencies: payload };

  case GET_CURRENCIES_ERROR:
    return {
      ...state,
      isLoading: false,
      error: `Houve um erro no carregamento das moedas. Error: ${payload}`,
    };

  case STORE_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          ...payload,
          id: state.lastExpenseId + 1,
        },
      ],
      lastExpenseId: state.lastExpenseId + 1,
    };

  case DELETE_EXPENSE: {
    const { expenses } = state;
    const updatedExpenses = expenses.filter((expense) => expense.id !== payload);
    return { ...state, expenses: updatedExpenses };
  }

  default:
    return state;
  }
}
