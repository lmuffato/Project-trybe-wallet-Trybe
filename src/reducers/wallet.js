// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { TOTAL_VALUE } from '../actions/index';

const INITIAL_STATE = {
  valorTotal: 0,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TOTAL_VALUE:
    return {
      ...state,
      totalValue: state + action.payload,
    };
  default:
    return state;
  }
};

export default walletReducer;
