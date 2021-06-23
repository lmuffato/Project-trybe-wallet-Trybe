// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};

function saveUserEmail(email = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SAVE_EMAIL':
    return { email: action.payload.email };
  default:
    return email;
  }
}

export default saveUserEmail;
