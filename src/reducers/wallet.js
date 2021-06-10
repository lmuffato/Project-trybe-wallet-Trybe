const initialState = {
  expenses: [],
  totalSpent: 0,
  currentId: 0,
};

function walletReducer(state = initialState, action) {
  switch (action.type) {
  case 'ADD_EXPENSE':
    console.log(state.totalSpent);
    return {
      expenses: [...state.expenses, action.payload],
      currentId: state.currentId + 1,
    };
  case 'DELETE_EXPENSE':
    console.log(state.totalSpent);
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.payload.id),
    };
  default:
    return state;
  }
}

export default walletReducer;
