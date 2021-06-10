// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  LOADING, APISUCCESS, APIERROR, EXPENSE, TOTAL, UPDATE,
} from '../actions';

const INITIAL_STATE = {
  loading: false,
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case TOTAL:
    return {
      ...state,
      total: action.payload.value,
    };
  case EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload.data],
    };
  case UPDATE:
    return {
      ...state,
      expenses: action.payload.value,
    };
  case LOADING:
    return {
      ...state,
      loading: true,
    };
  case APISUCCESS:
    return ({
      ...state,
      loading: false,
      currencies: action.payload,
    });
  case APIERROR:
    return {
      ...state,
      loading: false,
      error: action.payload.error,
    };
  default:
    return state;
  }
}

export default walletReducer;
