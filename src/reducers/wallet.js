// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  LOADING_REQUEST,
  ERROR_REQUEST,
  SUCCESS_REQUEST,
  EXPENSES_SUCESS,
  DELETE_EXPENSE } from '../actions/index';

const INITIAL_STATE = {
  loading: false,
  coins: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOADING_REQUEST:
    return {
      ...state,
      loading: true,
    };
  case SUCCESS_REQUEST:
    return {
      ...state,
      loading: false,
      coins: action.realValueCoins,
    };
  case ERROR_REQUEST:
    return {
      ...state,
      loading: false,
    };
  case EXPENSES_SUCESS:
    return {
      ...state,
      expenses: [...state.expenses, action.expensesInfo],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.id),
    };
  default:
    return state;
  }
};

export default walletReducer;
