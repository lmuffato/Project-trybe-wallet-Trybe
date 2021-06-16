// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const WALLET_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function wallet(state = WALLET_STATE, action) {
  switch (action.type) {
  default:
    return state;
  }
}

export default wallet;
