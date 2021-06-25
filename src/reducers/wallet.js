// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { LOADING, SUCCESS, FAIL, ADD_EXPENSE, DELETE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
  error: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOADING:
    return { ...state, loading: !state.loading };
  case FAIL:
    return { ...state, error: action.payload };
  case SUCCESS:
    return { ...state, currencies: action.payload };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses.filter((element) => element !== action.payload)],
    };
  default:
    return state;
  }
};

export default reducer;
