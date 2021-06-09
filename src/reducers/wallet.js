// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// import { INITIAL_STATE } from './index';
const INITIAL_STATE = {
  user: [],
  wallet: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'WALLET':
    return action.value;
  default:
    return state;
  }
}

export default walletReducer;
