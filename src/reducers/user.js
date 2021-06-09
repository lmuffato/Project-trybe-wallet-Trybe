// Esse reducer será responsável por tratar as informações da pessoa usuária
const myEmail = (state = '', action) => {
  switch (action.type) {
  case 'email':
    return { email: action.payload.value };
  default:
    return state;
  }
};

export default myEmail;
