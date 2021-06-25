// Esse reducer será responsável por tratar as informações da pessoa usuária

const userDefaul = {
  email: '',
};

function userReducer(state = userDefaul, action) {
  switch (action.type) {
  case '':
    return {};
  default:
    return state;
  }
}

export default userReducer;
