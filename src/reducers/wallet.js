const INITIAL_STATE = {
  currencies: ['BRL'],
  expenses: [],

};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_EXPENSE':
    return state;
  default:
    return state;
  }
};

export default wallet;
