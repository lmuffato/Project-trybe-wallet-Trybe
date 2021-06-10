import {
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
  SAVE_EXPENSE_SUCCESS,
  SAVE_EXPENSE_ERROR,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  SAVE_EDIT_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: null,
  total: 0,
  edit: {},
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES_SUCCESS: {
    const keys = Object.keys(action.payload);
    const arrayWithoutUSDT = keys.filter((key) => key !== 'USDT');
    return {
      ...state,
      currencies: arrayWithoutUSDT,
    };
  }
  case GET_CURRENCIES_ERROR || SAVE_EXPENSE_ERROR:
    return {
      ...state,
      error: action.payload,
    };
  case SAVE_EXPENSE_SUCCESS:
    return {
      ...state,
      expenses: [...state.expenses, action.payload.data],
      total: state.total + action.payload.total,
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: action.payload.data,
      total: action.payload.total,
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      edit: action.payload,
    };
  case SAVE_EDIT_EXPENSE:
    return {
      ...state,
      expenses: action.payload.data,
      total: action.payload.total,
      edit: {},
    };
  default:
    return state;
  }
};

export default wallet;
