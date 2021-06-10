// Esse reducer será responsável por tratar as informações da pessoa usuária
import initialState from './initialState';

const user = (state = initialState, action) => {
  console.log(action.type);
  console.log(state);
  switch (action.type) {
  case 'loggin_sucess':
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default user;
