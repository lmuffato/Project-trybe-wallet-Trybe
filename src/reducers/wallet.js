import { CREATE_EXPENSE } from '../actions';

const initialState = {
  coin: [],
  expense: [],
  total: 0,
};

export default function wallet(state = initialState, action) {
  switch (action.type) {
  case CREATE_EXPENSE: {
    const { payload: { coin } } = action;
    return {
      ...state,
      coin,
    };
  }
  default:
    return state;
  }
}
