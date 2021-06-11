import { FETCH_API } from '../common/def';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export default function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_API:
    return { ...state, currencies: action.payload };
  default:
    return state;
  }
}
