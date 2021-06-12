import { ADD_EXPENSES, GET_CURRENCY, REQUEST_CURRENCY } from "../actions";

const INIT_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
}

const walletReducer = (state = INIT_STATE, action) => {
  switch(action.type) {
    case ADD_EXPENSES: {
      return {
        ...state,
        expenses: [
          ...state.expenses,
          {
            ...action.expenses,
            id: state.expenses.length,
          }
        ],
        isFetching: false,
      }
    }
    case REQUEST_CURRENCY: {
      return { ...state, isFetching: true }
    }
    default: return state;
  }
};

export default walletReducer;
