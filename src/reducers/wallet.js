const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  id: 0,
  showEdit: false,
  editId: 0,
};

const magicNum = -1;

function compare(a, b) {
  if (a.id < b.id) {
    return magicNum;
  }
  if (a.id > b.id) {
    return 1;
  }
  return 0;
}

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ('NEW_EXPENSE'):
    return {
      ...state,
      id: state.id + 1,
      expenses: state.expenses.concat(action.payload).sort(compare),
    };
  case ('REMOVE_EXPENSE'):
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload),
    };
  case ('SHOW_HIDE_EDIT'):
    return {
      ...state,
      showEdit: action.payload,
      editId: action.editId,
    };
  default:
    return state;
  }
}

export default wallet;
