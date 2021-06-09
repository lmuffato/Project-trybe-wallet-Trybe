const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ('NEW_EXPENSE'):
    return {
      ...state,
      expenses: state.expenses.concat(action.payload),
    };
  default:
    return state;
  }
}

export default wallet;
