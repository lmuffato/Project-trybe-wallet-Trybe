import { WALLET_EXPENSES, WALLET_CURRENCIES, COUNT_ID, DELETE_ROW } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  count: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.coins] };
  case WALLET_CURRENCIES:
    return { ...state, currencies: action.data };
  case COUNT_ID:
    return { ...state, count: state.count + 1 };
  case DELETE_ROW:
    return { ...state, expenses: state.expenses.filter((item) => item !== action.obj) };
  default:
    return state;
  }
};

export default wallet;

// referencias: https://www.ti-enxame.com/pt/react-native/como-adiciono-um-elemento-ao-array-no-redutor-do-redux-nativo-do-react/829227346/
