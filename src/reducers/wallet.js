// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// import { SET_COINS, RATES, EXPENSE } from '../actions';
import { SET_COINS, EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalAmount: 0,
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_COINS:
    // console.log(action);
    return { ...state, currencies: action.payload };
  // case RATES:
  //   console.log('rates here.');
  //   return { ...state };
  case EXPENSE:
    console.log('expense here.');
    return { ...state,
      expenses: [...state.expenses, action.payload],
      totalAmount: Number(state.totalAmount)
      + Number(action.payload.value)
      * (action.payload.exchangeRates[action.payload.currency].ask),
    };
  default:
    return state;
  }
}

export default walletReducer;
