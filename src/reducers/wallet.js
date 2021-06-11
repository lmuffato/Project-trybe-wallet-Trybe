import {
  REQUEST_CURRENCY,
  RECEIVE_CURRENCY,
  ADD_EXPENSE,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  EDITED_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  methods: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
  tags: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
  editMode: false,
  editID: '',
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCY:
    return { ...state, loading: true };

  case RECEIVE_CURRENCY:
    return {
      ...state,
      currencies: action.payload,
      loading: false,
    };

  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };

  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.payload),
    };

  case EDIT_EXPENSE:
    return {
      ...state,
      editMode: true,
      editID: action.payload,
    };

  case EDITED_EXPENSE:
  {
    const oldExpenseIndex = state.expenses
      .indexOf(state.expenses.find(({ id }) => state.editID === id));
    state.expenses[oldExpenseIndex] = action.payload;
    return {
      ...state,
      expenses: [
        ...state.expenses,
      ],
      editID: '',
      editMode: false,
    };
  }
  default:
    return state;
  }
};

export default walletReducer;
