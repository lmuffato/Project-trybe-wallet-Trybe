import { GET_CURRENCY, ADD_EXPENSE, DELETE_EXPENSE } from '../actions';
// recebe a action e manipula ela
const GET_VALUE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = GET_VALUE, action) => {
  switch (action.type) {
  case GET_CURRENCY:
    return { ...state, currencies: action.currency };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses.filter((element) => element !== action.payload),
      ],
    };

  default:
    return state;
  }
};

export default wallet;
