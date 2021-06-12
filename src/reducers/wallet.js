export const ADD_EXPENSE = 'ADD_EXPENSE';

const INITIAL_STATE = {
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  const { payload, type } = action;
  const copyState = { ...state };

  switch (type) {
  case ADD_EXPENSE:
    copyState.expenses.push({ ...payload });
    return copyState;
  default:
    return state;
  }
}

export default walletReducer;
