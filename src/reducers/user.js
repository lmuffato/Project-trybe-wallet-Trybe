// Esse reducer será responsável por tratar as informações da pessoa usuária

const USER_STATE = {
  user: {
    email: '',
  },
};

function user(state = USER_STATE, action) {
  switch (action.type) {
  default:
    return state;
  }
}

export default user;
