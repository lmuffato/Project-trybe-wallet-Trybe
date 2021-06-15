// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  email: 'mar',
};

const userReducer = (state = INITIAL_STATE, action) => {
  console.log(state.email, action);
  return state;
};

export default userReducer;
