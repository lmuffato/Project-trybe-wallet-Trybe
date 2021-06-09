const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: '',
  id: 0,
};

const GET_SUCCESS = 'GET_SUCCESS';
const GET_ERROR = 'GET_ERROR';
const NEW_EXPENSES = 'NEW_EXPENSES';
const REMOVE_ITEM = 'REMOVE_ITEM';

const addExpense = (state = INITIAL_STATE, action) => {
  const { id, expenses } = state;
  const expense = {
    id,
    ...action.expenses,
  };
  return {
    ...state,
    expenses: [
      ...expenses,
      expense,
    ],
    id: id + 1,
  };
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_SUCCESS:
    return {
      ...state,
      currencies: [
        ...Object.keys(action.payload.currencies)
          .filter((key) => key !== 'USDT'),
      ],
    };
  case GET_ERROR:
    return {
      ...state,
      error: action.payload.error,
    };
  case NEW_EXPENSES:
    return addExpense(state, action);
  case REMOVE_ITEM:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id),
    };
  default:
    return state;
  }
}

export default wallet;
