import {
  CREATE_EXPENSE, DELETE_EXPENSE, SUM_TOTAL, SAVE_COINS,
} from '../actions/walletAction';

const initialState = {
  currencies: {},
  expenses: [],
  total: 0,
};

export default function wallet(state = initialState, action) {
  switch (action.type) {
  case CREATE_EXPENSE: {
    const { payload: { expense } } = action;
    const { expenses } = state;
    return {
      ...state,
      expenses: [...expenses, expense],
    };
  }
  case DELETE_EXPENSE: {
    const { payload: { newExpense } } = action;
    return {
      ...state,
      newExpense,
    };
  }
  case SUM_TOTAL: {
    const { payload: { total } } = action;
    return {
      ...state,
      total,
    };
  }
  case SAVE_COINS: {
    const { payload: { currencies } } = action;
    return {
      ...state,
      currencies,
    };
  }
  default:
    return state;
  }
}
