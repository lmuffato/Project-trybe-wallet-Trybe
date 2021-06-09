// Esse reducer será responsável por tratar as informações da pessoa usuária
import initialState from './initialState';

const user = (state = initialState, action) => {
  console.log(action, state);
  return (state);
};

export default user;
