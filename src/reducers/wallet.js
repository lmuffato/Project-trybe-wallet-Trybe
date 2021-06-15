// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  error: null,
  id: -1,
  exchangeRates: {},
  totalValue: 0,
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LOADING_REQUEST':
    return {
      ...state,
      isLoading: true,
    };
  case 'SUCCESS_REQUEST':
    return {
      ...state,
      currencies: action.data,
    };
  case 'GET_EXPENSES':
    return {
      ...state,
      expenses: [...state.expenses, action.expenses], // adiciono o objeto q estava antes e o atualizado
      id: action.expenses.id, // pego esse valor do id que está dentro do objeto expenses
    };
  case 'GET_EXCHANGE_RATES':
    return {
      ...state,
      exchangeRates: action.data,
    };
  case 'GET_TOTAL_VALUE':
    return {
      ...state,
      totalValue: action.value,
    };
  default:
    return state;
  }
}

export default walletReducer;
