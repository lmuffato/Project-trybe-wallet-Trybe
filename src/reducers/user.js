// Esse reducer será responsável por tratar as informações da pessoa usuária
const initialState = {
  email: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case 'SET_EMAIL':
    return { ...state, email: payload };

  default:
    return state;
  }
};
