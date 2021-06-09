import { ADD_EXP } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

export default function wallet(state = initialState, { type, payload }) {
  switch (type) {
  case ADD_EXP:
    return {
      ...state,
      expenses: payload,
    };
  default:
    return state;
  }
}
