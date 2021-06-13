import { GET_CURRENCIES } from '../actions';
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    console.log(action.data);
    return { ...state, currencies: action.data };
  default:
    return state;
  }
};

export default wallet;
