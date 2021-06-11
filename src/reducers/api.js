import { REQUESTED_API,
  REQUEST_SUCCESS,
  REQUEST_ERROR,
  GET_EXCHANGE,
  requestedApi,
  getExchange,
  requestSuccess,
} from '../actions';

const INITIAL_STATE = {
  user: { email: '' },
  wallet: {
    currencies: [],
    expenses: [],
  },
  isFetching: false,
};

export function fetchAPI() {
  return async (dispatch) => {
    dispatch(requestedApi());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    dispatch(requestSuccess());
    dispatch(getExchange(data));
  };
}

export default function apiReducer(state = INITIAL_STATE, action) {
  const { wallet } = state;
  switch (action.type) {
  case REQUESTED_API:
    return { ...state, isFetching: true };
  case REQUEST_SUCCESS:
    return { ...state, isFetching: 'success' };
  case REQUEST_ERROR:
    return { ...state, isFetching: 'error' };
  case GET_EXCHANGE:
    return { ...state, wallet: { ...wallet, currencies: action.exchanges } };
  default:
    return state;
  }
}
