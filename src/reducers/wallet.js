const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'exemplo':
    return state;
  default:
    return state;
  }
};

export default wallet;
