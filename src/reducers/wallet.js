const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: []
  }
};

function wallet(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADICIONAR':
      return state;
    case 'EDITAR':
      return state;
    case 'EXCLUIR':
      return state;
    default:
      return state;
  };
};

export default wallet;
