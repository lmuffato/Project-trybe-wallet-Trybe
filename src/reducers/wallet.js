import {
  TOTAL_VALUE,
  GET_CURRENCIES,
  ADD_EXPENSES,
  COUNT_INCREMENT,
  DELETE_EXPENSES } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  count: 0,
};

export default (state = initialState, { type, payload }) => {
  const newState = { ...state };

  switch (type) {
  case TOTAL_VALUE:
    return { ...state, ...payload };
  case GET_CURRENCIES:
    return { ...state, currencies: payload };
  case ADD_EXPENSES:
    newState.expenses.push({ ...payload, id: state.count });
    return newState;
  case DELETE_EXPENSES:
    newState.expenses.filter((exp) => exp.id !== payload);
    return newState;
  case COUNT_INCREMENT:
    return { ...state, count: state.count + 1 };
  default:
    return state;
  }
};
