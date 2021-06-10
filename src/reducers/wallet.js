import { RECEIVE_COINS, RECEIVE_EXPENSE } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_COINS: return { ...state, currencies: Object.keys(action.currencies) };
  case RECEIVE_EXPENSE: {
    // I appreciate my friend's help:
    // https://github.com/RenzoSev

    return { ...state,
      expenses: [...state.expenses,
        { ...action.expense, exchangeRates: action.currencies }] };
  }
  default: return state;
  }
};

export default wallet;
