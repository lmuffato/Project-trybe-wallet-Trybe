import {
  RECEIVED_CURRENCY,
  ADD_OUTLAY,
  // REMOVE_OUTLAY,
  // EDIT_OUTLAY,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalExpended: 0,
};

function getWallet (state = INITIAL_STATE, action) {
  switch (action.type) {
  case RECEIVED_CURRENCY:
    return { ...state, currencies: action.currencies };
  case ADD_OUTLAY:
    return { ...state,
      expenses: [...state.expenses, {...action.expenses}],
      totalExpended: state.totalExpended + action.expended,
    };
  // case REMOVE_OUTLAY:
  //   return state;
  // case EDIT_OUTLAY:
  //   return state;
  default:
    return state;
  }
};

export default getWallet;
