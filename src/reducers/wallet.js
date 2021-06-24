// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  CREATE_EXPENSE, LIST_COINS, DELETE_EXPENSE,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CREATE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.concat(action.payload.expense),
    };
  case LIST_COINS:
    return {
      ...state,
      currencies: action.payload.coins,
    };
  case DELETE_EXPENSE: {
    const index = action.payload.expense.id;
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== index),
    };
  }
  default:
    return state;
  }
}

// Referências:
// Explicação sobre redux e apoio do Guilherme Dornelles - Turma 10 - Tribo A e do meu marido que é desenvolvedor
// Como usar uma variável para acessar a chave de um objeto: https://stackoverflow.com/questions/922544/using-variable-keys-to-access-values-in-javascript-objects
