// Esse reducer será responsável por tratar as informações da pessoa usuária
// 4 - Lubuntu (LXQt)

// Feito assistindo o plantão do Gabs no dia 10/06
const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'TRANSPORTAR_EMAIL':
    return { email: action.email };
  default:
    return state;
  }
};

export default user;
