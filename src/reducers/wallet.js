// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const walletReducer = (state = {}, action) => {
  switch (action.type) {
  case 'ADD_USER': return state;
  default: return state;
  }
};

export default walletReducer;
