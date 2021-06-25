// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const wallet = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = wallet, action) {
  switch (action.type) {
  case 'FLOW':
    return {
      currencies: action.value.exchangeRates,
      expenses: [...state.expenses, action.value],
    };
  default:
    return state;
  }
}

export default walletReducer;
