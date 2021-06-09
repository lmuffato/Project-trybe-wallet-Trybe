// Esse reducer será responsável por tratar as informações da pessoa usuária
// import { INITIAL_STATE } from './index';
// const INITIAL_STATE = {};
const INITIAL_STATE = {
  user: [],
  wallet: [],
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'USER':
    console.log(state);
    return action.value;
  default:
    return state;
  }
}

export default userReducer;
