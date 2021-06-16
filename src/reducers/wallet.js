import { ADD_EXPENSE,
  ADD_CURRENCIE,
  REQUESTED_API,
  REQUEST_SUCCESS,
  REQUEST_ERROR,
  GET_EXCHANGE,
  GET_EXCHANGE_RATE,
  SUM_VALUES,
  requestedApi,
  requestSuccess,
  getExchange } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
};

const setExchangeRates = (expenses, action) => {
  const filtered = expenses.filter((expense) => expense.id === action.exRa.id).pop();
  const index = expenses.indexOf(filtered);
  expenses[index].exchangeRates = action.exRa.value;
  return expenses;
};

export default function walletReducer(state = INITIAL_STATE, action) {
  const { expenses } = state;
  switch (action.type) {
  case ADD_CURRENCIE:
    return { ...state };
  case ADD_EXPENSE:
    return { ...state, expenses: expenses.concat(action.expense) };
  case REQUESTED_API:
    return { ...state, isFetching: true };
  case REQUEST_SUCCESS:
    return { ...state, isFetching: 'success' };
  case REQUEST_ERROR:
    return { ...state, isFetching: 'error' };
  case GET_EXCHANGE:
    return { ...state, currencies: action.exchanges };
  case GET_EXCHANGE_RATE:
    return { ...state, expenses: setExchangeRates(expenses, action) };
  default:
    return state;
  }
}

const TOTAL_INITIAL_VALUE = {
  totalExpensesValue: 0,
};

export function totalValue(state = TOTAL_INITIAL_VALUE, action) {
  switch (action.type) {
  case SUM_VALUES:
    return { ...state, totalExpensesValue: action.sum };
  default:
    return state;
  }
}

export function fetchAPI() {
  return async (dispatch) => {
    dispatch(requestedApi());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    dispatch(requestSuccess());
    dispatch(getExchange(data));
  };
}
