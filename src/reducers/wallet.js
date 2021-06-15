import { GET_CURRENCY } from '../actions';
// recebe a action e manipula ela
const GET_VALUE = {
  currencies: [],
  expenses: [],
};

const value = (state = GET_VALUE, action) => {
  switch (action.type) {
  case GET_CURRENCY:
    return { ...state, currencies: action.currency };
  default:
    return state;
  }
};

export default value;
