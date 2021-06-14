import {
  ADD_EXPENSES,
  GET_CURRENCES_LOADING,
  GET_CURRENCES_SUCCESS,
  GET_CURRENCES_ERROR,
  TOTAL_VALUES,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  isloading: false,
  error: null,
  expenses: [],
  total: 0,
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCES_LOADING:
    return {
      ...state,
      isloading: true,
    };
  case GET_CURRENCES_SUCCESS:
    return {
      ...state,
      currencies: action.code,
    };
  case GET_CURRENCES_ERROR:
    return {
      ...state,
      error: action.error,
    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case TOTAL_VALUES:
    return {
      ...state,
      total: state.total + action.total,
    };
  default:
    return state;
  }
}

export default walletReducer;
