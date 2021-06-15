import { RECEIVE_CURRENCY } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_CURRENCY:
    return { ...state, currencies: action.currency };
  default:
    return state;
  }
};
export default wallet;
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
