// Esse reducer será responsável por tratar as informações da pessoa usuária
const initialState = {
  email: '',
};

export default function user(state = initialState, { type, payload }) {
  switch (type) {
  case 'LOGIN':
    return { email: payload };
  default:
    return state;
  }
}
