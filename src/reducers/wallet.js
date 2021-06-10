import { API_SUCCESS, API_LOADING } from '../actions/index';

const INITIAL_STATE = {
  currencies: ['BRL'],
  expenses: [],
  loading: true,

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
  default:
    return state;
  }
}

export default wallet;
