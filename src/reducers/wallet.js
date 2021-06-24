// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_GASTO, DELETE_GASTO } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_GASTO:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case DELETE_GASTO: {
    const { expenses } = state;
    const newValue = expenses.filter((expense) => expense.id !== action.payload);
    return { ...state, expenses: newValue };
  }
  default:

    return { ...state };
  }
};

export default walletReducer;
