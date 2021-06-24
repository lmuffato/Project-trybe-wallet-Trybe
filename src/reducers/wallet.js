import {
  RECEIVED_CURRENCY,
  ADD_OUTLAY,
  REMOVE_OUTLAY,
  // EDIT_OUTLAY,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalExpended: 0,
};

const addingToTotal = ({ totalExpended }, action) => {
  const { currency } = action.expenses;
  const moeda = currency;
  const total = totalExpended;
  if (total === 0 || total === undefined) {
    return (
      action.expenses.exchangeRates[moeda].ask
      * action.expenses.value).toFixed(2);
  } return (
    (parseFloat(total)
    + parseFloat(action.expenses.exchangeRates[moeda].ask
    * action.expenses.value)).toFixed(2));
};

// lógica para excluir linha da tabela vista no repositório do Wanderson
function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case RECEIVED_CURRENCY:
    console.log(action);
    return { ...state, currencies: action.currencies };
  case ADD_OUTLAY:
    return { ...state,
      expenses: [...state.expenses, { ...action.expenses }],
      totalExpended: addingToTotal(state, action),
    };
  case REMOVE_OUTLAY:
    return {
      ...state,
      expenses: [
        ...state.expenses.filter((expense) => expense.id !== action.payload.expense.id),
      ],
    };
  default:
    return state;
  }
}

export default wallet;
