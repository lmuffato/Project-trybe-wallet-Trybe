import {
  REQUEST_CURRENCIES, ADD_EXPENSE, IS_FETCHING, DELETE_EXPENSE, EDIT_EXPENSE,
  ADD_EDITED_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  currencies: [],
  expenses: [],
  id: -1,
  idToEdit: null,
  isEditing: false,
};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case IS_FETCHING:
    return {
      ...state,
      isFetching: true,
    };
  case REQUEST_CURRENCIES:
    return {
      ...state,
      isFetching: false,
      currencies: action.payload,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      isFetching: false,
      expenses: [...state.expenses, action.payload.localState],
      id: action.payload.id,
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((e) => e.id !== action.payload),
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      idToEdit: action.payload,
      isEditing: true,
    };
  case ADD_EDITED_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses.filter((e) => e.id !== action.id), action.payload,
      ],
      isEditing: false,
      idToEdit: null,
    };
  default:
    return state;
  }
}
