// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CREATE_EXPENSE, LIST_COINS, SUM_EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalExpenses: 0,
};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CREATE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.concat(action.payload.expense),
    };
  case SUM_EXPENSES: {
    const { value } = action.payload.expenses;
    const key = action.payload.expenses.currency;
    const { exchangeRates } = action.payload.expenses;
    const expenseValue = value * exchangeRates[key].ask;
    return {
      ...state,
      totalExpenses: state.totalExpenses + expenseValue,
    };
  }
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
// Como usar uma variável para acessar a chave de um objeto: https://stackoverflow.com/questions/922544/using-variable-keys-to-access-values-in-javascript-objects
