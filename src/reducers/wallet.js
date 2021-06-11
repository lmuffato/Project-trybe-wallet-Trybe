import { ADD_EXPENSE, GET_CURRENCY } from '../actions/actionTypes';

const initialState = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_CURRENCY:
    return {
      ...state,
      currencies: action.payload.data,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload.expense],
    };
  default:
    return state;
  }
};

export default walletReducer;
