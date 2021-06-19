import { RES_SUCCESS, REQUEST, RES_FAILED } from '../actions';

const INITIAL_STATE = {
  expenses: [],
  loading: false,
  error: '',
  currencies: [],
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
  default: return state;
  }
}

export default walletReducer;
