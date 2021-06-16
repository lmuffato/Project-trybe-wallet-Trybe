// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  LOADING_REQUEST,
  ERROR_REQUEST,
  SUCCESS_REQUEST,
  TOTAL_VALUE,
  EXPENSES_SUCESS } from '../actions/index';

const INITIAL_STATE = {
  totalValue: 0,
  loading: false,
  coins: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TOTAL_VALUE:
    return {
      ...state,
      totalValue: state.totalValue + action.payload,
    };
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
  default:
    return state;
  }
};

export default walletReducer;
