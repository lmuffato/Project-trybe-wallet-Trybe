import { WALLET } from '../actions/index';
// Dicas de Gabs instrutor Trybe. Função wallet passa o nome do state.
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET:
    return { ...state, action };
  default:
    return { ...state };
  }
};

export default wallet;
