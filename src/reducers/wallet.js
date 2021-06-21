// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CREATE_EXPENSE, LIST_COINS } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export default function wallet(state = INITIAL_STATE, action) {
  console.log(state);
  switch (action.type) {
  case CREATE_EXPENSE:
    return {
      ...state,
      expenses: action.payload.expenses,
    };
  case LIST_COINS:
    return {
      ...state,
      currencies: action.payload.coins,
    };
  default:
    return state;
  }
}

// Referências:
// Explicação sobre redux e apoio do Guilherme Dornelles - Turma 10 - Tribo A e do meu marido que é desenvolvedor
