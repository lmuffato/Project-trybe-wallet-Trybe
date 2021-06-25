const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case 'ADD_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, payload],
    };
  case 'GET_CURRENCIES':
    return {
      ...state,
      isLoading: true,
    };
  case 'GET_CURRENCIES_SUCCESS':
    return {
      ...state,
      isLoading: false,
      currencies: payload,
    };
  case 'GET_CURRENCIES_FAILURE':
    return {
      ...state,
      isLoading: false,
      error: payload,
    };
  default:
    return state;
  }
}

export default walletReducer;
