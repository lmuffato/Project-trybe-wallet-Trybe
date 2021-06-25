// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES, ADD_SPENDS, DEL_SPENDS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state, currencies: action.currency };
  case ADD_SPENDS:
    return { ...state, expenses: [...state.expenses, action.spends] };
  case DEL_SPENDS:
    return {
      ...state,
      expenses: [...state.expenses.filter((spend) => spend !== action.payload)],
    };
  default:
    return state;
  }
};

// Referência: Requisito 10, como deletar do estado global apenas o elemento em que foi clicado para deletar
// https://stackoverflow.com/questions/60602801/how-to-update-the-global-state-using-redux-and-remove-an-item-from-the-global-st
export default wallet;
