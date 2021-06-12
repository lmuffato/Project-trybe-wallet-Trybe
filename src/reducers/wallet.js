// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// mport {
import {
  NEW_EXPENSE, DELETE_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  id: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case NEW_EXPENSE:
    return {
      ...state,
      id: state.id + 1,
      expenses: state.expenses.concat(action.payload),
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload),
    };
  default:
    return state;
  }
}

export default wallet;

// baseado em https://github.com/Anshuman301/todos-app2/blob/master/src/redux/reducer/addTodo.reducer.js
