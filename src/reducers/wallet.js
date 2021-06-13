import { ADD_DESPESAS } from '../actions/index';

const INITIAL_STATE = {
  expenses: [],
};

function addDespesas(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_DESPESAS:
    return {
      ...state,
      expenses: [...state.expenses, {
        ...action.despesaAtual,
        exchangeRates: action.getCoins,
      }],
    };
  default:
    return state;
  }
}

export default addDespesas;
