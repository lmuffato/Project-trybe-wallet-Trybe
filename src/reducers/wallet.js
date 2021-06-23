// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// 5 - Ubuntu Mate (Mate)

// Feito assistindo o plantão do Gabs no dia 10/06
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'INFO_CAMBIO':
    return { ...state, currencies: action.cambio };
  case 'ADICIONAR_DESPESA':
    return { ...state, expenses: [...state.expenses, action.despesa] };
  default:
    return state;
  }
};

export default wallet;
