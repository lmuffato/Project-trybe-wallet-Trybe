// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  aindaNSeiOQueVemAqui: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'something':
    return 'this';
  default:
    return state;
  }
};

export default user;
