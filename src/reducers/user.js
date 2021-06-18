// Esse reducer será responsável por tratar as informações da pessoa usuária
const initialState = {
  email: 'default@default.com',
  password: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case 'LOGIN':
    return ({
      ...state,
      email: action.email,
      password: action.password,
    });

  default:
    return state;
  }
};

export default user;
