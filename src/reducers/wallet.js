import { ADD_EXPENSE,
  ADD_CURRENCIE,
  REQUESTED_API,
  REQUEST_SUCCESS,
  REQUEST_ERROR,
  GET_EXCHANGE,
  requestedApi,
  requestSuccess,
  getExchange } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
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
