import INITIAL_STATE from '../constants/INITIAL_STATE';
import ACTIONS from '../constants/actions';

const walletReducer = (state = INITIAL_STATE.wallet, action) => {
  const { type, data, expense, expenseId, expenseKey, editing, expenses } = action;
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
      expenses: state.expenses.filter((exp) => exp.id !== Number(expenseId)),
    };
  case ACTIONS.DEFINE_EDITING:
    return {
      ...state,
      editing,
    };
  case ACTIONS.SET_EXPENSE_TO_EDIT:
    return {
      ...state,
      expense,
    };
  case ACTIONS.EDIT_EXPENSE:
    return {
      ...state,
      expense: { ...state.expense, ...expenseKey },
    };
  case ACTIONS.UPDATE_EXPENSES:
    return {
      ...state,
      expenses,
    };
  default:
    return state;
  }
};

export default walletReducer;
