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
    const currenciesArr = Object.keys(action.data).filter((key) => key !== 'USDT');
    console.log(currenciesArr);
    return { ...state, currencies: currenciesArr };
  default:
    return state;
  }
};

export default wallet;
