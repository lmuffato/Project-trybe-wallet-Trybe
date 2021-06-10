export const GET = 'GET';
export const SUCCESS_REQUEST = 'SUCCESS_REQUEST';
export const FAIL_REQUEST = 'FAIL_REQUEST';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  error: '',
};

export function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET:
    return { ...state, isFetching: true };
  case SUCCESS_REQUEST:
    return { ...state, currencies: action.payload, isFetching: false };
  case FAIL_REQUEST:
    return { ...state, error: action.payload, isFetching: false };
  default:
    return state;
  }
}
