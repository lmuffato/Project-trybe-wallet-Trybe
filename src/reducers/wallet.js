import { GET_CURRENCIES, GET_EXCHANGERATES, SET_EXPENSES } from '../actions';
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  exchangeRates: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    // console.log(action.data);
    return { ...state, currencies: action.data };
  case GET_EXCHANGERATES:
    // console.log(action.data);
    return { ...state, exchangeRates: action.data };
  case SET_EXPENSES:
    // console.log(action.data);
    return { ...state, expenses: [...state.expenses, ...action.data] };
  default:
    return state;
  }
};

export default wallet;
