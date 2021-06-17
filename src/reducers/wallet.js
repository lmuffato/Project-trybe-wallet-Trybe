// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_CURRENCY, ADD_EXPENSE, GET_TOTAL } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total_value: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
  case ADD_CURRENCY:
    return { ...state, currencies: action.payload.currencies };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case GET_TOTAL:
    return { ...state, total_value: state.total_value + action.payload };
  default:
    return state;
  }
};
export default wallet;
