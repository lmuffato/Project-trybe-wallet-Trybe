// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  state: '',
};

function saveUserEmail(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SAVE_EMAIL':
    return { state: action.state };
  default:
    return state;
  }
}

export default saveUserEmail;
