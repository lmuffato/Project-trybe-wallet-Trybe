import { REQUEST_CURRENCIES,
  REQUEST_CURRENCIES_FAILURE,
  REQUEST_CURRENCIES_SUCESSFUL } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return state;
  case REQUEST_CURRENCIES_SUCESSFUL:
    return state;
  case REQUEST_CURRENCIES_FAILURE:
    return state;
  default:
    return state;
  }
};

export default wallet;
