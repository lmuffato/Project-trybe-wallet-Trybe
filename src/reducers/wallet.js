import { WALLET,
  GET_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_FAILED,
  ADD_EXPENSE,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
  error: null,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET:
    return {
      ...state,
      expenses: action.payload,
    };
  case GET_CURRENCIES:
    return {
      ...state,
      loading: true,
    };
  case GET_CURRENCIES_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
      loading: false,
    };
  case GET_CURRENCIES_FAILED:
    return {
      ...state,
      error: action.payload,
      loading: false,
    };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
};

export default wallet;
