const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'TOTAL_ACTION':
    return { state: action.state };
  default:
    return state;
  }
}

export default walletReducer;
