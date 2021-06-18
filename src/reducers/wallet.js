const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_EXPENSE': {
    const { payload: { value } } = action;
    const newExpense = state.expenses.concat(value);
    return { ...state, newExpense };
  }
  case 'EDIT_EXPENSE':
    return { ...state };
  default:
    return { ...state };
  }
}

export default wallet;
