const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const updateCurrency = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'UPDATE_CURRENCY':
    return {
      ...state,
      currencies: action.payload };
  default:
    return state;
  }
};

export default updateCurrency;
