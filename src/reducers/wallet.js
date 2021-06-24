import { LOADING_CURRENCY, GET_CURRENCY_SUCCESS,
  FINISH_LOADING } from '../actions/wallet';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: true,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOADING_CURRENCY:
    return {
      ...state, isLoading: true,
    };
  case GET_CURRENCY_SUCCESS:
    return {
      ...state, currencies: action.payload,
    };
  case FINISH_LOADING:
    return {
      ...state, isLoading: false,
    };
  default:
    return state;
  }
};

export default wallet;
