// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoadingApi: false,
  errorApi: '',
  counter: 0,
  totalValue: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'FETCH_API':
    return {
      ...state,
      isLoadingApi: true,
    };
  case 'FETCH_API_SUCCESS':
    return {
      ...state,
      isLoadingApi: false,
      currencies: action.payload.success,
    };
  case 'FETCH_API_ERROR':
    return {
      ...state,
      isLoadingApi: false,
      exchangeRates: action.payload.success,
    };
  case 'FETCH_API_EXCHANGE_SUCCESS':
    return {
      ...state,
      exchangeRates: action.payload.success,
    };
  case 'ADD_EXPENSE':
    return {
      ...state,
      expenses: state.expenses.concat(action.payload.expenses),
    };
  case 'INCREASE_COUNTER':
    return {
      ...state,
      counter: state.counter + 1,
    };

  case 'INCREASE_EXPENSE':
    return {
      ...state,
      totalValue: state.expenses.reduce((acc, curr) => (
        acc + Number(curr.value) * Number(curr.exchangeRates[curr.currency].ask)
      ), 0).toFixed(2),
    };

  default: return state;
  }
};

export default wallet;
