import { API_SUCCESS, API_LOADING, ADD_EXPENSE, UPDATE_TOTAL } from '../actions/index';

const INITIAL_STATE = {
  currencies: ['BRL'],
  expenses: [],
  loading: true,
  total: 0,

};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case API_SUCCESS:
    return {
      ...state,
      currencies: action.payload,

    };
  case API_LOADING:
    return {
      ...state,
      loading: false,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case UPDATE_TOTAL:
    console.log(state.total);
    console.log(action.payload);
    return {
      ...state,
      total: action.payload + state.total,
    };

  default:
    return state;
  }
}

export default wallet;
