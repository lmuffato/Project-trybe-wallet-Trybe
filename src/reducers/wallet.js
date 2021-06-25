// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_CURRENCY_SUCCESS,
  ADD_CURRENCY, ADD_RECORD_WALLET } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: true,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_CURRENCY:
    return { ...state, isLoading: true };
  case ADD_CURRENCY_SUCCESS:
    return { ...state, isLoading: false, currencies: action.payload };
  case ADD_RECORD_WALLET:
    return { ...state, isLoading: false, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
};

export default wallet;
