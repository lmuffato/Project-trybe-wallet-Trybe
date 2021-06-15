// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  LOADING_REQUEST,
  ERROR_REQUEST,
  SUCCESS_REQUEST,
  TOTAL_VALUE } from '../actions/index';

const INITIAL_STATE = {
  totalValue: 0,
  loading: false,
  coins: {},
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TOTAL_VALUE:
    return {
      ...state,
      totalValue: state + action.payload,
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
      coins: action.data,
    };
  case ERROR_REQUEST:
    return {
      ...state,
      loading: false,
      erro: action.payload.error,
    };
  default:
    return state;
  }
};

export default walletReducer;
