import {
  ADD_EXP,
  GET_CURR,
  GET_CURR_FAILURE,
  GET_CURR_SUCCESS,
} from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  isLoading: false,
  error: null,
};

export default function wallet(state = initialState, { type, payload }) {
  switch (type) {
  case ADD_EXP:
    return {
      ...state,
      expenses: payload,
    };
  case GET_CURR:
    return {
      ...state,
      isLoading: true,
    };
  case GET_CURR_SUCCESS:
    return {
      ...state,
      isLoading: false,
      currencies: payload,
    };
  case GET_CURR_FAILURE:
    return {
      ...state,
      isLoading: false,
      error: payload,
    };
  default:
    return state;
  }
}
