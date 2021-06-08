// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

export default function wallet(state = initialState, { type, payload }) {
  switch (type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...expenses, payload],
    };
  default:
    return state;
  }
}
