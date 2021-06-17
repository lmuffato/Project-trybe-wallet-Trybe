const initialState = {
  id: 0,
  currencies: [],
  expenses: [],
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case 'ADD_DESPESA':
    return {
      expenses: [...state.expenses, action.value],
      id: state.id + 1,
      currencies: action.value.exchangeRates,
    };
  case 'DELETE_DESPESA':
    return state.filter((register) => register !== action.value);
  default:
    return state;
  }
}

export default wallet;
