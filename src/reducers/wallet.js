import {
  RECEIVED_CURRENCY,
  ADD_OUTLAY,
  REMOVE_OUTLAY,
  // EDIT_OUTLAY,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalExpended: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case RECEIVED_CURRENCY:
    return { ...state, currencies: action.currencies };
  case ADD_OUTLAY:
    return { ...state,
      expenses: [...state.expenses, { ...action.expenses }],
      totalExpended: parseFloat(state.totalExpended) + parseFloat(
        action.expenses.value * action.expenses.exchangeRates.USD.ask,
      ),
    };
  case REMOVE_OUTLAY:
    return {
      ...state,
      expenses: [...state.expenses.filter(({ id }) => id !== action.payload)],
    };
  // case EDIT_OUTLAY:
  //   return state;
  default:
    return state;
  }
}

export default wallet;
