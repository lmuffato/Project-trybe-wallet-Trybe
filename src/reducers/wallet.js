// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE_WALLET = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const userWallet = (state = INITIAL_STATE_WALLET, action) => {
  switch (action.type) {
  case 'action':
    return state;
  default:
    return state;
  }
};

export default userWallet;
