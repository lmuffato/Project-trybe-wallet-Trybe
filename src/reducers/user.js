// Esse reducer será responsável por tratar as informações da pessoa usuária
const initialState = {
  email: '',
};

export default function user(state = initialState, action) {
  switch (action.type) {
  case 'SET_EMAIL':
    return { email: action.payload.email };
  default:
    return state;
  }
}
