// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LOGIN':
    return action.value;
  default:
    return state;
  }
}

export default wallet;
