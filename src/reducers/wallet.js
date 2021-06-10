import {
  GET_CURRENCES_LOADING,
  GET_CURRENCES_SUCCESS,
  GET_CURRENCES_ERROR,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  isloading: false,
  error: null,
  expenses: [],
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
  default:
    return state;
  }
}

export default walletReducer;
