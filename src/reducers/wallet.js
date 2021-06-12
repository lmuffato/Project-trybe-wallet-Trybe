import { FETCH_ERROR, FETCH_SUCCESS,
  FETCH_START, SAVE_EXPENSE,
  REMOVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
  error: null,
};

const removeCurrency = (currencies, currencyTag) => {
  const array = Object.values(currencies);
  const index = array.findIndex((currency) => currency.codein === currencyTag);
  array.splice(index, 1);
  return array;
};

const incrementId = ({ expenses }) => {
  const length = expenses.length - 1;
  const { id } = expenses[length];
  return id + 1;
};

const expensesIdCreator = (state, { expense, changeRates }) => {
  const { expenses } = state;
  if (expenses.length === 0) {
    return { id: 0, ...expense, exchangeRates: changeRates };
  }
  const id = incrementId(state);
  return { id, ...expense, exchangeRates: changeRates };
};

const delExpense = (expenses, id) => expenses.filter((expense) => expense.id !== (+id));

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_START:
    return {
      ...state, loading: true, error: null };
  case FETCH_SUCCESS:
    return {
      ...state,
      loading: false,
      error: null,
      currencies: removeCurrency(action.payload, 'BRLT'),
    };
  case FETCH_ERROR:
    return { ...state,
      loading: false,
      error: action.payload,
      currencies: [],
    };
  case SAVE_EXPENSE:
    return { ...state,
      expenses: [...state.expenses, expensesIdCreator(state, action)],
      loading: false,
    };

  case REMOVE_EXPENSE:
    return { ...state,
      expenses: delExpense(state.expenses, action.payload),
    };
  default:
    return state;
  }
};

export default wallet;
