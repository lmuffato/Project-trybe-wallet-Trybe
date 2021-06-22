import INITIAL_STATE from '../constants/INITIAL_STATE';
import ACTIONS from '../constants/actions';

const walletReducer = (state = INITIAL_STATE.wallet, action) => {
  const { type, data, expense, expenseId } = action;
  switch (type) {
  case ACTIONS.GET_EXCHANGE_RATES:
    return {
      ...state,
      exchangeRates: { ...state.exchangeRates, ...data },
      currencies: [...Object.values(data).map((obj) => obj.code)],
    };
  case ACTIONS.ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, expense],
    };
  case ACTIONS.REMOVE_EXPENSE:
    return {
      ...state,
      // total:
      // state.total
      // - expense.value * expense.exchangeRates[expense.currency].ask,
      expenses: state.expenses.filter((exp) => exp.id !== Number(expenseId)),
    };
  case ACTIONS.UPDATE_TOTAL:
    return {
      ...state,
      total: state.expenses.reduce(
        (a, b) => a + b.value * b.exchangeRates[b.currency].ask, 0,
      ),
    };
  default:
    return state;
  }
};

export default walletReducer;
