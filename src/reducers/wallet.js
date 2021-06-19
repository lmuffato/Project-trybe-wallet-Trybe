import { RES_SUCCESS, REQUEST, RES_FAILED, ADD, TOTAL } from '../actions';

const INITIAL_STATE = {
  expenses: [],
  loading: false,
  error: '',
  currencies: [],
  total: 0,
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST:
    return {
      ...state,
      loading: true,
    };
  case RES_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
      loading: false,
    };
  case RES_FAILED:
    return {
      ...state,
      loading: false,
      error: action.payload.error,
    };
  case ADD:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case TOTAL:
    return {
      ...state,
      total: action.payload,
    };
  default: return state;
  }
}

export default walletReducer;
