import { LOADING_CURRENCY, GET_CURRENCY_SUCCESS,
  FINISH_LOADING,
  ADD_EXPENSES } from '../actions/wallet';

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
  case ADD_EXPENSES:
    return {
      ...state, expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
};

export default wallet;
