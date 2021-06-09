import {
  GET_CURRENCIES,
  GET_CURRENCIES_ERROR,
  GET_CURRENCIES_SUCCESS,
  STORE_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  error: null,
  currencies: [],
  lastExpenseId: -1,
  expensesTotal: 0,
  expenses: [],
};

export default function walletReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case GET_CURRENCIES:
    return {
      ...state,
      isLoading: true,
    };

  case GET_CURRENCIES_SUCCESS:
    return {
      ...state,
      isLoading: false,
      currencies: payload,
    };

  case GET_CURRENCIES_ERROR:
    return {
      ...state,
      isLoading: false,
      error: `Houve um erro no carregamento das moedas. Error: ${payload}`,
    };

  case STORE_EXPENSE: {
    const { value, currency: selectedCurrency, exchangeRates } = payload;
    const currency = exchangeRates[selectedCurrency];
    const convertedValue = value * currency.ask;
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          ...payload,
          id: state.lastExpenseId + 1,
        },
      ],
      lastExpenseId: state.lastExpenseId + 1,
      expensesTotal: Number((state.expensesTotal + convertedValue).toFixed(2)),
    };
  }

  default:
    return state;
  }
}
