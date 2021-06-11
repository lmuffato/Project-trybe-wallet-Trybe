export const GET = 'GET';
export const SUCCESS_REQUEST = 'SUCCESS_REQUEST';
export const FAIL_REQUEST = 'FAIL_REQUEST';
export const ADD_EXPENSES = 'ADD_EXPENSES';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  error: '',
};

export function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET:
    return { ...state, isFetching: true };
  case SUCCESS_REQUEST:
    return { ...state, currencies: action.payload, isFetching: false };
  case FAIL_REQUEST:
    return { ...state, error: action.payload, isFetching: false };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, {
        id: state.expenses.length,
        value: action.payload.value,
        description: action.payload.description,
        currency: action.payload.currency,
        method: action.payload.paymentMethod,
        tag: action.payload.tag,
        exchangeRates: action.payload.exchangeRates,
      },
      ],
    };
  default:
    return state;
  }
}
