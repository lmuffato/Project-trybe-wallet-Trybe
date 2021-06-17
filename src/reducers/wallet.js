// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// currencies: moedas
// expenses: despesas

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  expense: null,
  edit: false,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_EXPENSES':
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.expenses,
      ],
    };
  case 'ADD_CURRENCIES':
    return {
      ...state,
      currencies: action.currencies,
    };
  case 'UPDATER_EXPENSE':
    return {
      ...state,
      expenses: action.expenses,
    };
  case 'EDIT_EXPENSE':
    return {
      ...state,
      expense: action.edit,
      edit: true,
    };
  case 'FINISH_EDITIG':
    return {
      ...state,
      expense: {},
      edit: false,
      expenses: action.expenses,
    };
  default:
    return state;
  }
}

export default wallet;
