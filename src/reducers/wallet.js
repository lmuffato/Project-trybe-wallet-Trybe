const initialState = {
  debt: [],
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case 'ADD_DESPESA':
    return {
      debt: [...state.debt, action.value],
    };
  case 'DELETE_DESPESA':
    return state.filter((register) => register !== action.value);
  default:
    return state;
  }
}

export default wallet;
