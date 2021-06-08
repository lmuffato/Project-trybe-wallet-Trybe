const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  selectedExchange: 'BRL',
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'TESTE':
    return state;
  default:
    return state;
  }
};

export default walletReducer;
