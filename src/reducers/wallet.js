// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_GASTO } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_GASTO:
    return { ...state, expenses: [...state.payload, action.payload] };
  default:
    return state;
  }
};

export default walletReducer;
