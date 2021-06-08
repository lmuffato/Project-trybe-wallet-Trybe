// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  email: '',
};

export default function user(state = initialState, action) {
  switch (action.type) {
  case 'SET_EMAIL':
    return { ...state, email: action.payload.email };
  default:
    return state;
  }
}
