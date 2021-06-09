// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CURRENCIES, EXPENSES, EXCLUDE } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

export default function wallet(state = initialState, action) {
  const toNumber = Number(action.payload);
  const newArr = state.expenses.filter((element) => element.id !== toNumber);
  switch (action.type) {
  case CURRENCIES:
    return {
      ...state,
      currencies: [...state.currencies, ...action.payload],
    };
  case EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case EXCLUDE:
    return {
      ...state,
      expenses: [...newArr],
    };
  default:
    return state;
  }
}
