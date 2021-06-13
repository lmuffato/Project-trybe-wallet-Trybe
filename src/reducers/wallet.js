// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_GASTO':
    return { Wallet: action.data };
  default:
    return state;
  }
};

export default walletReducer;
