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

const subtractingFromTotal = ({ totalExpended, expenses }, action) => {
  const code = action.payload.attributes.length - 1;
  const { moeda } = expenses;
  // const moeda = currency;
  console.log(moeda[code]);
  const total = totalExpended;
  return (
    (parseFloat(total)
    - parseFloat(expenses[code].exchangeRates[moeda].ask
    * expenses[code].value)).toFixed(2));
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case RECEIVED_CURRENCY:
    return { ...state, currencies: action.currencies };
  case ADD_OUTLAY:
    return { ...state,
      expenses: [...state.expenses, { ...action.expenses }],
      totalExpended: addingToTotal(state, action),
    };
  case REMOVE_OUTLAY:
    return {
      ...state,
      expenses: [...state.expenses.filter(({ id }) => id !== action.payload)],
      totalExpended: subtractingFromTotal(state, action),
    };
  // case EDIT_OUTLAY:
  //   return state;
  default:
    return state;
  }
}

export default wallet;
